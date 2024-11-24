<template lang="">
    <div class="folder-tree-wrap">
        <FolderTreeNode
            v-for="folderNode in visibleNodes"
            :key="folderNode.folder.id"
            :node="folderNode"
            :selected="folderNode.folder === selectedFolder"
            @select="handleSelect(folderNode)"
            @open="folderNode.open = !folderNode.open"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Folder } from '../../types/Folder'
import { FolderNode } from '../../types/FolderNode'
import FolderTreeNode from './FolderTreeNode.vue'

const emit = defineEmits(['select'])

const props = defineProps<{
    data: Folder[]
}>()
const selectedFolder = defineModel()

const handleSelect = (folderNode: FolderNode) => {
    if (folderNode.folder === selectedFolder.value) selectedFolder.value = null
    else selectedFolder.value = folderNode.folder
    emit('select', folderNode?.folder?.id)
}

const updateFolderTreeNodes = (folders: Folder[]) => {
    let depth = 0
    const rootNode: FolderNode = {
        depth: depth,
        childrenNodes: folders,
        visited: false,
        open: true
    }
    const queue = [rootNode]
    const stack: FolderNode[] = []
    const getChildrenNodes = (node?: FolderNode): (FolderNode | Folder)[] => {
        return node?.childrenNodes?.slice().reverse() || []
    }
    while (queue.length > 0) {
        const currentNode = queue.pop()
        if (currentNode && currentNode.folder) {
            stack.push(currentNode)
            currentNode.visited = true
        }
        if (currentNode?.open)
            for (let childNode of getChildrenNodes(currentNode)) {
                let mappedNode: FolderNode
                if (!(childNode as FolderNode).depth)
                    mappedNode = {
                        folder: childNode,
                        parentNode: currentNode,
                        depth: (currentNode?.depth || 0) + 1,
                        childrenNodes: (childNode as Folder)?.children,
                        open: true
                    } as FolderNode
                else mappedNode = childNode as FolderNode
                if (!mappedNode.visited) {
                    mappedNode.visited = true
                    queue.push(mappedNode)
                }
            }
    }
    return stack
}

const folderTreeNodes = ref(updateFolderTreeNodes(props.data))

const visibleNodes = computed(() => {
    const resultArray = [] as FolderNode[]
    let i = 0
    while (i < folderTreeNodes.value.length) {
        resultArray.push(folderTreeNodes.value[i])
        if (folderTreeNodes.value[i].open) {
            i++
            continue
        }
        const parentNodeDepth = folderTreeNodes.value[i].depth
        i++
        while (
            i < folderTreeNodes.value.length &&
            folderTreeNodes.value[i].depth > parentNodeDepth
        ) {
            i++
        }
    }
    return resultArray
})
</script>

<style scoped>
.folder-tree-wrap {
    padding: 0.5rem;
}
</style>
