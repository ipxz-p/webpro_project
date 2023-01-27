<template>
    <div>
        <form @submit="login()">
            <input type="text" name="" id="">
            <input type="text" name="" id="">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from '../axios'
    export default {
        name: 'login',
        methods: {
            async login(){
                try {
                    await axios.post("/auth/reg")
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>