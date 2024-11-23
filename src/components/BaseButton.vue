<template lang="">
    <button>{{ text }}</button>
</template>
<script setup lang="ts">
const props = defineProps<{
    text: string
}>()
</script>
<style scoped>
    button {
        background: hsl(202, 100%, 62%);
        border-radius: 10px;
        border: none;
        color: white;
        padding: 1rem 1.5rem;
    }
    button:hover {
        background: hsl(202, 100%, 42%);
        cursor: pointer;
    }
</style>