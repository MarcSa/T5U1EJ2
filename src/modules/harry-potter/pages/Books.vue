<script setup lang="ts">
import { useGetData } from '@/modules/harry-potter/services/useGetData';
import { BOOKS_API } from '@/modules/harry-potter/config/api';
import type { Book } from '@/modules/harry-potter/interfaces/Book.interface';
import { onMounted, ref } from 'vue';
import BookComponent from '@/modules/harry-potter/components/BookComponent.vue';

const books = ref<Book[]>([]);

onMounted(async () => {
    books.value = await useGetData(BOOKS_API);
});
</script>

<template>
    <ul class="row">
        <BookComponent
            v-for="book in books"
            :key="book.index"
            :title="book.title"
            :originalTitle="book.originalTitle"
            :releaseDate="book.releaseDate"
            :description="book.description"
            :cover="book.cover"
            :pages="book.pages"
        />
    </ul>
</template>

<style scoped></style>
