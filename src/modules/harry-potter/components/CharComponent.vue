<script setup lang="ts">
const props = defineProps<{
    image: string;
    fullname: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    birthDate: string;
    children: string[];
}>();
</script>

<template>
    <li class="col-12 col-sm-6 col-lg-3 mb-4" style="list-style: none">
        <div class="card h-100">
            <div style="height: 300px" class="d-flex justify-content-center align-items-center">
                <img
                    class="card-img-top"
                    style="width: 100%; height: 100%; object-fit: cover"
                    :src="props.image"
                    :alt="props.fullname"
                />
            </div>
            <div class="card-body pb-4">
                <h5 class="card-title mb-1">{{ props.fullname }}</h5>
                <p class="text-secondary mb-2">aka {{ props.nickname }}</p>
                <p class="lead fs-6 mb-2">
                    House:
                    {{ props.hogwartsHouse }}
                    · Born:
                    {{ props.birthDate }}
                </p>

                <p class="card-text" v-if="props.interpretedBy !== ''">
                    <span class="fw-bold">Portrayed by: </span>
                    {{ props.interpretedBy }}
                </p>
                <p v-if="props.children.length !== 0" class="mb-1">Children:</p>
                <ul v-if="props.children.length !== 0">
                    <li v-for="child in props.children">
                        {{ child }}
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>

<style scoped></style>
