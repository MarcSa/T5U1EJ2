<script setup lang="ts">
const props = defineProps<{
    title: string;
    cover_i?: number;
    author_name?: string[];
    first_publish_year?: number;
    bookKey: string;
}>();
</script>

<template>
    <li class="col-12 col-sm-6 col-lg-4 mb-4" style="list-style: none">
        <div class="card h-100">
            <div
                v-if="props.cover_i"
                style="height: 300px"
                class="d-flex justify-content-center align-items-center"
            >
                <img
                    class="card-img-top"
                    style="width: 100%; height: 100%; object-fit: cover"
                    :src="`https://covers.openlibrary.org/b/id/${props.cover_i}-L.jpg`"
                    :alt="props.title"
                />
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-1">{{ props.title }}</h5>
                <p class="fw-bold text-secondary mb-2">
                    Autor:
                    <span v-for="(author, index) in props.author_name" :key="index">{{
                        author
                    }}</span>
                </p>
                <p class="lead fs-6 mb-auto pb-3">
                    Año de primera publicación:
                    {{ props.first_publish_year }}
                </p>
                <a
                    :href="`https://openlibrary.org${props.bookKey}`"
                    target="_blank"
                    rel="noopener"
                    class="btn btn-primary"
                    role="button"
                >
                    Ver en OpenLibrary
                </a>
            </div>
        </div>
    </li>
</template>

<style scoped></style>
