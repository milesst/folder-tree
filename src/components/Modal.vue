<template lang="">
    <div 
    v-if="active" 
    class="modal-container">
        <div class="modal">
            <header 
            v-if="headerText"
            class="model-header">
            {{ headerText }}
            </header>
            <div>
                <slot />
            </div>
            <footer class="modal-footer">
                <BaseButton
                    @click="$emit('close')" 
                    text="Close"
                />
            </footer>   
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const props = defineProps<{
    headerText?: string,
    active: boolean
}>()
</script>
<style scoped>
    .modal-container {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        width: 40rem;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: 0 0 10px hsl(0 0% 70%);
        background-color: white;
    }
    .model-header {
        padding-bottom: 1rem;
    }
    .modal-footer {
        padding-top: 1rem;
    }
</style>