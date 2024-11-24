<template>
    <div
        v-if="active"
        class="modal-container"
    >
        <div class="modal">
            <header
                v-if="headerText"
                class="model-header"
            >
                <slot name="header">{{ headerText }}</slot>
            </header>
            <div class="model-content">
                <slot />
            </div>
            <footer class="modal-footer">
                <BaseButton
                    @click="handleButtonPress('select')"
                    text="OK"
                />
                <BaseButton
                    @click="handleButtonPress('close')"
                    text="Close"
                />
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

const emit = defineEmits(['select', 'close'])
const active = defineModel()
const handleButtonPress = (event: 'select' | 'close') => {
    emit(event)
    active.value = false
}

defineProps<{
    headerText?: string
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
    height: 70%;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 0 10px hsl(0 0% 70%);
    background-color: white;
    display: flex;
    flex-direction: column;
}
.model-header {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
}
.modal-footer {
    padding-top: 1rem;
    display: flex;
    justify-content: flex-end;
}
.modal-footer > *:not(:last-child) {
    margin-right: 1rem;
}
.model-content {
    overflow-y: auto;
    height: 100%;
    border: 3px solid rgb(206, 206, 206);
    border-radius: 10px;
}
</style>
