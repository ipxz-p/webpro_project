import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('../components/MainPage.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
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
                path: '/myword/:id',
                name: 'WordByID',
                component: () => import('../views/WordByID.vue'),
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
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router