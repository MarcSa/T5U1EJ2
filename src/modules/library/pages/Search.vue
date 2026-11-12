<script setup lang="ts">
import { useGetData } from '@/modules/library/services/useGetData';
import { BASE_API } from '@/modules/library/config/api';
import type { Document } from '@/modules/library/interfaces/Document.interface';
import { ref } from 'vue';
import BookComponent from '@/modules/library/components/BookComponent.vue';
import FormComponent from '@/modules/library/components/FormComponent.vue';

const books = ref<Document[]>([]);

const searchBooks = async (v: string) => {
    const term = v.trim();
    if (term === '') return;

    try {
        const response = await useGetData(BASE_API + encodeURIComponent(term));
        books.value = response.docs;
    } catch (error) {
        console.error('No s’han pogut obtenir els llibres:', error);
    }
};
</script>

<template>
    <FormComponent @sendData="searchBooks" />
    <ul>
        <BookComponent
            v-for="book in books"
            :cover_i="book.cover_i"
            :title="book.title"
            :author_name="book.author_name"
            :first_publish_year="book.first_publish_year"
            :key="book.key"
        />
    </ul>
</template>

<style scoped></style>
