<template>
    <div
        class="folder-node"
        :style="{ 'margin-left': node.depth * 2.5 + 'rem' }"
    >
        <div
            class="folder-icon"
            @click="emit('open')"
        >
            {{ node.open ? '-' : '+' }}
        </div>
        <div
            @click="emit('select')"
            class="folder-name"
            :class="selected ? 'selected' : ''"
        >
            📁 {{ node.folder?.name }}
        </div>
        <div
            v-if="selected"
            class="folder-check"
        >
            ✓
        </div>
    </div>
</template>

<script setup lang="ts">
import { FolderNode } from '../../types/FolderNode'

defineProps<{
    node: FolderNode
    selected: boolean
}>()
const emit = defineEmits(['select', 'open'])
</script>

<style lang="scss">
.folder-node {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
}
.selected {
    color: $primary;
}
.folder-name {
    padding: 0.5rem 1rem 0.5rem;
    border-radius: 10px;

    &:hover {
        color: $primary;
    }
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
.folder-check {
    font-size: 0.7rem;
    height: 1rem;
    width: 1rem;
    color: white;
    background-color: $primary;
    border-radius: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
