<script setup lang="ts">
const props = defineProps<{
    title: string;
    originalTitle: string;
    releaseDate: string;
    description: string;
    cover: string;
    pages: number;
}>();
</script>

<template>
    <li class="col-12 col-sm-6 col-lg-4 mb-4" style="list-style: none">
        <div class="card h-100">
            <div style="height: 300px" class="d-flex justify-content-center align-items-center">
                <img
                    class="card-img-top"
                    style="width: 100%; height: 100%; object-fit: cover"
                    :src="props.cover"
                    :alt="props.title"
                />
            </div>
            <div class="card-body">
                <h5 class="card-title mb-1">{{ props.title }}</h5>
                <p class="fw-bold text-secondary mb-2">{{ props.originalTitle }}</p>
                <p class="lead fs-6 mb-2">
                    Realesed:
                    {{ props.releaseDate }}
                    · Pages:
                    {{ props.pages }}
                </p>

                <p class="card-text">
                    {{ props.description }}
                </p>
            </div>
        </div>
    </li>
</template>

<style scoped></style>
