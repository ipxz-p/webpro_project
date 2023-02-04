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
            },
            {
                path: '/play',
                name: 'Play',
                component: () => import('../views/Play.vue'),
            },
            {
                path: '/myword',
                name: 'Myword',
                component: () => import('../views/Myword.vue'),
            },
            {
                path: '/history',
                name: 'History',
                component: () => import('../views/History.vue'),
            },
            {
                path: '/wishlist',
                name: 'Wishlist',
                component: () => import('../views/Wishlist.vue'),
            },
            {
                path: '/notification',
                name: 'Notification',
                component: () => import('../views/Notification.vue'),
            },
        ]
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router