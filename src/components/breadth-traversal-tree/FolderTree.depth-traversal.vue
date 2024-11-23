<template lang="">
    <div
    v-for="folderNode in folderTreeNodes"
    >
    <p @click="folderNode.open = !folderNode.open" :style="{ 'margin-left': (folderNode.depth*2.5)+'rem' }">{{ folderNode.folder.name }}</p>
    </div>  
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Folder } from '../../types/Folder';
import { FolderNode } from '../../types/FolderNode';

const props = defineProps<{
    data: Folder[],
    selectedFolder?: Folder | null
    }>()

const folderTreeNodes = computed(() => {
  let depth = 0
  const rootNode: FolderNode = {
    depth: depth++,
    childrenNodes: props.data,
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
                  parentNode: currentNode?.parentNode,
                  depth: (currentNode?.depth || 0) + 1,
                  childrenNodes: (childNode as Folder)?.children,
                  open: false
              } as FolderNode
          else
              mappedNode = childNode as FolderNode
          if (!mappedNode.visited) {
              mappedNode.visited = true
              queue.push(mappedNode)
          }
      }
  }
  return stack
} 
)

</script>
<style lang="">
    
</style>