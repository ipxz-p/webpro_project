<template>
    <router-link :to="{name: 'WordByID', params: {id} }" class="cursor-pointer border-2 border-yellow-400 rounded-lg px-4 py-3 bg-yellow-100">
                <h1 class="text-lg font-medium">{{ name }}</h1>
                <p class="text-gray-500 truncate">{{ description }}</p>
                <div class="flex items-center mt-3">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        <p>{{ total_word }}</p>
                    </div>
                    <div class="h-1 w-1 rounded-full bg-black mx-2"></div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <p>{{ total_play }}</p>
                    </div>
                </div>
    </router-link>
</template>

<script>
    export default {
        props: ['id', 'name', 'description', 'total_word', 'total_play']
    }
</script>

<style scoped>

</style>