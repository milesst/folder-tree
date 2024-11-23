<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseButton from './components/BaseButton.vue'
import Modal from './components/Modal.vue'
import { Folder } from './types/Folder';
import FolderTree from './components/breadth-traversal-tree/FolderTree.depth-traversal.vue';

const modalIsOpen = ref(false)
const folders = ref<Folder[]>([{
        id: '1',
        name: 'folder1',
        children: [
            {
                id: '4',
                name: 'folder4'
            }
        ]
    },
    {
        id: '2',
        name: 'folder2',
        children: [
            {
                id: '5',
                name: 'folder5',
                children: [
                  {
                      id: '9',
                      name: 'folder9'
                  },
                  {
                      id: '10',
                      name: 'folder10'
                  }
                ]
            },
            {
                id: '6',
                name: 'folder6',
                children: [
                  {
                      id: '7',
                      name: 'folder7'
                  },
                  {
                      id: '8',
                      name: 'folder8'
                  }
                ]
            }
        ]
    },
    {
        id: '3',
        name: 'folder3'
    }
])
const selectedFolder = ref<Folder | null>(null)

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
      :active="modalIsOpen"
      @close="modalIsOpen = false"
      headerText="Folder Tree"
  >
    <FolderTree
      :data="folders"
      :selectedFolder="selectedFolder"
      :depth="0"
      :maxDepth="10"
    />
  </Modal>
</template>

<style scoped>

</style>
