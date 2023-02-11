<template>
    <div class="flex">
        <div class=" h-screen flex max_login:w-full min_login:basis-[500px] min_login:shrink-0 justify-center items-center px-6 min_login:px-10">
            <div class="w-full py-4">
                <form class="" >
                    <h1 class="text-4xl">Create Account</h1>
                    <div class="mt-8">
                        <h1>Username</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input class="outline-0 w-full h-full" type="text" name="" placeholder="Min 4 character" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1>Password</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input class="outline-0 w-full h-full" type="password" name="" placeholder="Min 6 character" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1>Confirm password</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input class="outline-0 w-full h-full" type="password" name="" placeholder="Min 6 character" >
                        </div>
                    </div>
                    <button class="w-full bg-mypink text-white py-2 mt-8 rounded-xl" type="submit">Create Account</button>
                </form>
                <div class="flex mt-4 text-sm">
                    <p class="mr-1">Already have an account?</p>
                    <router-link class="text-mypurple-300" :to="{name: 'Login'}">Login</router-link>
                </div>
            </div>
        </div>
        <div class="bg-mypurple-400 h-screen flex items-center justify-center w-full max_login:hidden">
            <img src="../assets/img/rocket1.png" alt="">
        </div>
    </div>
</template>

<script>
    import axios from '../axios'
    export default {
        name: 'login',
        data(){
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>

</style>