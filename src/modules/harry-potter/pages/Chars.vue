<script setup lang="ts">
import { useGetData } from '@/modules/harry-potter/services/useGetData';
import { CHARACTERS_API } from '@/modules/harry-potter/config/api';
import type { Character } from '@/modules/harry-potter/interfaces/Char.interface';
import { onMounted, ref } from 'vue';
import CharComponent from '@/modules/harry-potter/components/CharComponent.vue';

const chars = ref<Character[]>([]);

onMounted(async () => {
    chars.value = await useGetData(CHARACTERS_API);
});
</script>

<template>
    <ul class="row">
        <CharComponent
            v-for="char in chars"
            :key="char.index"
            :fullname="char.fullName"
            :nickname="char.nickname"
            :hogwartsHouse="char.hogwartsHouse"
            :birthDate="char.birthdate"
            :interpretedBy="char.interpretedBy"
            :children="char.children"
            :image="char.image"
        />
    </ul>
</template>

<style scoped></style>
