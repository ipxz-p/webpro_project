import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../components/MainPage.vue'),
        children: [
            {
                path: '/',
                name: '',
                component: () => import('../views/index.vue'),
            }
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router