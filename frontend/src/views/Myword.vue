<template>
    <div>
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">My word</p>
            <button class="px-4 py-2 bg-mypink rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <p>Add</p>
            </button>
        </div>
        <div class="grid gap-4 mt-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        ">
            <router-link :to="{name: 'WordByID', params: {id: 1} }" v-for="item in 5" :key="item" class="cursor-pointer border-2 border-yellow-400 rounded-lg px-4 py-3 bg-yellow-100">
                <h1 class="text-lg font-medium">Gat Pat</h1>
                <p class="text-gray-500 truncate">สำหรับใช้ในการสอบ gatpat</p>
                <div class="flex items-center mt-3">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        <p>10 words</p>
                    </div>
                    <div class="h-1 w-1 rounded-full bg-black mx-2"></div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <p>10 plays</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            
        },
    }
</script>

<style scoped>

</style>