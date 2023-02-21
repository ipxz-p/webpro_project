<template>
    <div>
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">My word</p>
            <button @click="setPopup()" class="px-4 py-2 bg-mypink rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <p>Add</p>
            </button>
        </div>
        <div v-if="allWordSet.length > 0"  class="grid gap-4 mt-4
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4
        ">
                <CardWordSet v-for="item in allWordSet" :key="item.wordSet_id" 
                :id="item.wordSet_id" :name="item.name" :description="item.description" :total_word="item.total_word" :total_play="item.total_play"
                />
        </div>
        <div v-else>
            no data
        </div>
        <Popup v-if="this.$store.state.showPopup">
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Add new word set</p>
                    <svg @click="setPopup()" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div class="mt-4">
                    <h1 class="text-lg">Title</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="title" class="outline-0 w-full h-full" type="text" name="" placeholder="Title of word set" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1 class="text-lg">Description</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="description" class="outline-0 w-full h-full" type="text" name="" placeholder="Add description" >
                        </div>
                    </div>
                    <button @click="addWordset()" class="w-full bg-mypink text-white py-2 mt-4 rounded-xl" type="submit">Add</button>
            </div>
        </Popup>
    </div>
</template>

<script>
    import axios from '../axios';
    import CardWordSet from '../components/CardWordSet.vue';
    import Popup from '../components/Popup.vue';
    export default {
        data() {
            return {
                allWordSet: [],
                username: this.$store.getters.userName.username,
                title: '',
                description: '',
            }
        },
        components: {
            CardWordSet,
            Popup
        },
        methods: {
            setPopup(){
                this.title = '',
                this.description = ''
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
            },
            async addWordset(){
                await axios.put("/wordSet/addWordSet", {
                title: this.title,
                description: this.description,
                username: this.username
                })
                .then(async (res) => {
                    await axios.post("/wordSet/getWordSetByUsername", {
                    username: this.username
                    })
                    .then((res) => {
                        this.allWordSet = res.data,
                        this.title = '',
                        this.description = ''
                        this.setPopupAddWordset()
                    })
                    .catch((err) => {
                        alert(err.response.data.message)
                    })
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
            }
        },
        async created() {
            await axios.post("/wordSet/getWordSetByUsername", {
                username: this.username
            })
            .then((res) => {
                this.allWordSet = res.data
            })
        },
    }
</script>

<style scoped>

</style>