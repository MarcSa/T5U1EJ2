import { createRouter, createWebHistory } from 'vue-router';
import Books from '@/modules/harry-potter/pages/Books.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/modules/harry-potter/layouts/HarryPotterLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Books,
                },
                {
                    path: '/personajes',
                    name: 'chars',
                    component: () => import('@/modules/harry-potter/pages/Chars.vue'),
                },
            ],
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/common/components/NotFound.vue'),
        },
    ],
});

export default router;
