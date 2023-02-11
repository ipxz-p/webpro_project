<template>
    <div class="flex">
        <div class="bg-mypurple-400 h-screen flex items-center justify-center w-full max_login:hidden">
            <img src="../assets/img/rocket1.png" alt="">
        </div>
        <div class=" h-screen flex max_login:w-full min_login:basis-[500px] min_login:shrink-0 justify-center items-center px-6 min_login:px-10">
            <div class="w-full py-4">
                <div class="" @submit="login()">
                    <h1 class="text-4xl">Login</h1>
                    <div class="mt-8">
                        <h1>Username</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="username" class="outline-0 w-full h-full" type="text" name="" placeholder="Min 4 character" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1>Password</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="password" class="outline-0 w-full h-full" type="password" name="" placeholder="Min 6 character" >
                        </div>
                    </div>
                    <button @click="login()" class="w-full bg-mypink text-white py-2 mt-8 rounded-xl" type="submit">Login</button>
                </div>
                <div class="flex mt-4 text-sm">
                    <p class="mr-1">Not registered yet?</p>
                    <router-link class="text-mypurple-300" :to="{name: 'Register'}">Create an Account</router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import axios from '../axios'
    export default {
        name: 'login',
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            async login(){
                try {
                    await axios.post("/auth/login", {
                        username: this.username,
                        password: this.password
                    })
                    .then((response) => {
                        if(response.data.accessToken){
                            localStorage.setItem('user', JSON.stringify(response.data));
                            this.$router.push({ name: 'Home' })
                        }
                    })
                    .catch((err) => {
                        alert(err.response.data.message)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        },
        
    }
</script>

<style scoped>

</style>