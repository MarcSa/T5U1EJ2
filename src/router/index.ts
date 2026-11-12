import { createRouter, createWebHistory } from 'vue-router';
import Search from '@/modules/library/pages/Search.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/modules/library/layouts/LibraryLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Search,
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
