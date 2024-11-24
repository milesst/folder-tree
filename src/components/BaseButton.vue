<template>
    <button class="base-button">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{
    text: string
}>()
</script>

<style scoped>
.base-button {
    background: hsl(202, 100%, 62%);
    border-radius: 10px;
    border: none;
    color: white;
    padding: 1rem 1.5rem;

    &:hover {
        background: hsl(202, 100%, 42%);
        cursor: pointer;
    }
}
</style>
