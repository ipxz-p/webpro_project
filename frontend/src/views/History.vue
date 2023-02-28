<template>
    <div>
        <p class="text-3xl font-semibold">History</p>
        <!-- card container -->
        <div class="mt-4 grid gap-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4">
            <div v-for="_ in 5" class="border-2 border-yellow-400 rounded-lg px-4 py-3 bg-yellow-100">
                <p class="font-medium text-lg">Gat</p>
                <p class="text-gray-500 truncate">ใช้สอบเข้าอนุบาล</p>
                <div class="mt-4 flex justify-between text-gray-600">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>                        <p>12/20</p>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <p>12/01/2546</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>