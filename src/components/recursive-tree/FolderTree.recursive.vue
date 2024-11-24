<template>
    <div
        v-for="folder in data"
        :key="folder.id"
    >
        <p :style="{ 'margin-left': depth * 2.5 + 'rem' }">{{ folder.name }}</p>
        <FolderTree
            v-if="depth < maxDepth"
            :data="folder.children"
            :depth="depth + 1"
        />
    </div>
</template>

<script setup lang="ts">
import { Folder } from '../../types/Folder'

withDefaults(
    defineProps<{
        data: Folder[]
        selectedFolder?: Folder | null
        depth: number
        maxDepth: number
    }>(),
    {
        maxDepth: 100
    }
)
</script>
