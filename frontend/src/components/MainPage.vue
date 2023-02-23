<template>
    <div>
        <div class="bg-mypurple-400 w-screen h-screen p-4 flex">
            <Sidebar />
            <div class="w-full h-full md:ml-3 flex flex-col">
                <Topbar />
                <div class="bg-white h-full mt-3 overflow-x-hidden rounded-md p-4 md:px-6 md:py-4 font-light">
                    <router-view />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
export default {
    components: {
        Sidebar,
        Topbar
    },
}
</script>

<style>

</style>


