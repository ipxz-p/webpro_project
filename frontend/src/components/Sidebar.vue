<template>
    <div 
    :class="{ showNavMobile: this.$store.state.navMobile }"
    class="bg-white h-full md:w-[250px] w-full md:rounded-md py-2 px-4 md:relative z-50 
    fixed max_md:top-[-100vh] transition-all duration-200"
    >
        <div class="flex justify-between items-center">
            <p class="text-mypurple-400 text-2xl logo">Seravabi</p>
            <svg @click="setnavMobile" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:hidden cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <div class="mt-4">
            <router-link to="/">
                <div class="transition-all duration-200 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 py-2 px-3 flex font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-[0.1rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <p>Home</p>
                </div>
            </router-link>
            <router-link to="/play">
                <div class="transition-all duration-200 mt-2 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 flex items-center py-2 px-3  font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>                
                    <p>Play</p>
                </div>
            </router-link>
            <router-link to="/myword">
                <div class="transition-all duration-200 mt-2 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 flex items-center py-2 px-3  font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="11 3 11 11 14 8 17 11 17 3"></polyline></svg>
                    <p>Myword</p>
                </div>
            </router-link>
            <router-link to="/history">
                <div class="transition-all duration-200 mt-2 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 flex items-center py-2 px-3  font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg>                
                    <p>History</p>
                </div>
            </router-link>
            <router-link to="/wishlist">
                <div class="transition-all duration-200 mt-2 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 flex items-center py-2 px-3  font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                    <p>Wishlist</p>
                </div>
            </router-link>
            <router-link to="/notification">
                <div class="transition-all duration-200 mt-2 bg-mypurple-200 hover:bg-mypurple-300 hover:text-white text-mypurple-500 flex items-center py-2 px-3  font-medium rounded-md cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M2 8c0-2.2.7-4.3 2-6"></path><path d="M22 8a10 10 0 0 0-2-6"></path></svg>
                    <p>Notification</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        methods: {
            setnavMobile(){
                this.$store.commit('setnavMobile', this.$store.state.navMobile)
            }
        }
    }
</script>

<style>
.showNavMobile{
    top: 0;
    left: 0;
}
</style>