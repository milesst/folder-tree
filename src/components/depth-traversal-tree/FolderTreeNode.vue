<template lang="">
    <div
        class="folder-node"
        :style="{ 'margin-left': node.depth * 2.5 + 'rem' }"
    >
        <div class="folder-icon" @click="emit('open')">
            {{ node.open ? '-' : '+' }}
        </div>
        <div
            @click="emit('select')"
            class="folder-name"
            :class="selected ? 'selected' : ''"
        >
            📁 {{ node.folder.name }}
        </div>
        <div v-if="selected" class="folder-check">✓</div>
    </div>
</template>
<script setup lang="ts">
import { FolderNode } from '../../types/FolderNode'

const emit = defineEmits(['select', 'open'])
defineProps<{
    node: FolderNode
    selected: boolean
}>()
</script>
<style>
.folder-node {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.selected {
    color: hsl(202, 100%, 62%);
}
.folder-name {
    padding: 0.5rem 1rem 0.5rem;
    border-radius: 10px;
}
.folder-name:hover {
    color: hsl(202, 100%, 62%);
}
.folder-icon {
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-right: 0.5rem;
    user-select: none;
}
.folder-node:not(:last-child) {
    margin-bottom: 1rem;
}
.folder-check {
    font-size: 0.7rem;
    height: 1rem;
    width: 1rem;
    color: white;
    background-color: hsl(202, 100%, 62%);
    border-radius: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
