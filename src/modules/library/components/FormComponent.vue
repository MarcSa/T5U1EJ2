<script setup lang="ts">
import { ref } from 'vue';

const textInput = ref<string>('');
const emit = defineEmits<{ (e: 'sendData', value: string): void }>();

const onSubmit = () => {
    emit('sendData', textInput.value);
};
</script>

<template>
    <h1>Resultados de búsqueda</h1>
    <form @submit.prevent="onSubmit">
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Introduce una búsqueda..."
                v-model="textInput"
            />
            <input class="btn btn-primary" type="submit" value="Buscar" />
        </div>
    </form>
</template>

<style scoped></style>
