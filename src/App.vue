<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue'
import Modal from './components/BaseModal.vue'
import { Folder } from './types/Folder'
import FolderTree from './components/depth-traversal-tree/FolderTree.depth-traversal.vue'

const modalIsOpen = ref(false)

const folders = ref<Folder[]>([
    {
        id: '1',
        name: 'Folder 1',
        children: [
            {
                id: '4',
                name: 'Folder 4'
            }
        ]
    },
    {
        id: '2',
        name: 'Folder 2',
        children: [
            {
                id: '5',
                name: 'Folder 5',
                children: [
                    {
                        id: '9',
                        name: 'Folder 9'
                    },
                    {
                        id: '10',
                        name: 'Folder 10'
                    }
                ]
            },
            {
                id: '6',
                name: 'Folder 6',
                children: [
                    {
                        id: '7',
                        name: 'Folder 7'
                    },
                    {
                        id: '8',
                        name: 'Folder 8'
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        name: 'Folder 3'
    }
])

const selectedFolder = ref<Folder | null>(null)
const selectedFolderId = ref<string | null>(null)

const openModal = () => {
    modalIsOpen.value = true
}
</script>

<template>
    <div>
        <BaseButton
            text="Open"
            @click="openModal"
        />
    </div>
    <Modal
        v-model="modalIsOpen"
        header-text="Folder Tree"
        @select="selectedFolderId = selectedFolder?.id"
    >
        <FolderTree
            :data="folders"
            v-model="selectedFolder"
        />
    </Modal>
    <p>
        {{
            selectedFolderId
                ? 'Selected folder id: ' + selectedFolderId
                : 'No folder selected'
        }}
    </p>
</template>
