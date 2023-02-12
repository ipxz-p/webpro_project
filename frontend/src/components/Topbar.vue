<template>
    <div class="h-[40px] w-full flex justify-between">
        <div @click="setnavMobile" 
        class="bg-white cursor-pointer basis-[40px] mr-3 shrink-0 rounded-md flex items-center justify-center md:hidden"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </div>
        <div class="flex md:w-full">
            <form class="rounded-md bg-white md:w-full h-full px-4 flex items-center justify-between">
                <input class="rounded-md w-full h-full ring-0 outline-0 border-0" placeholder="Search" type="text">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </form>
            <div v-if="username" class="bg-white ml-2 w-[150px] md:w-[200px] h-[40px] rounded-md p-2 items-center justify-center truncate flex">
                <p class="truncate font-medium">{{ username.username }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username: JSON.parse(localStorage.getItem('user')) 
            }
        },
        methods: {
            setnavMobile(){
                this.$store.commit('setnavMobile', this.$store.state.navMobile)
            }
        },
        created() {
            
        },
    }
</script>

<style >

</style>