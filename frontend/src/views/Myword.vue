<template>
    <div>
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">My word</p>
            <button @click="setPopup('addWordSet')" class="px-4 py-2 bg-mypink rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <p>Add</p>
            </button>
        </div>
        <!-- card word set container -->
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
        <!-- Popup add wordset -->
        <Popup type="addWordSet" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'addWordSet'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Add new word set</p>
                    <svg @click="setPopup('addWordSet')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
        <!-- Popup edit wordset -->
        <Popup type="editWordSet" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'editWordSet'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Edit word set</p>
                    <svg @click="setPopup('editWordSet')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
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
                    <button @click="editWordSet()" class="w-full bg-mypink text-white py-2 mt-4 rounded-xl" type="submit">Edit</button>
            </div>
        </Popup>
        <!-- Popup comfirm before delete wordset -->
        <Popup type="deleteWordSet" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'deleteWordSet'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="text-center p-4 text-2xl font-medium">
                    Are you sure you want to delete this wordset
                </div>
                <div class="flex">
                    <button @click="setPopup('deleteWordSet')" class="w-full py-2 mt-4 rounded-xl" type="submit">Cancel</button>
                    <button @click="deleteWordSet()" class="w-full bg-red-600 text-white py-2 mt-4 flex items-center justify-center rounded-xl" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                        <p>Delete</p>
                    </button>
                </div>
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
            setPopup(type){
                this.title = '',
                this.description = '',
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
                this.$store.commit('settypePopup', type)
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
                        this.setPopup()
                    })
                    .catch((err) => {
                        alert(err.response.data.message)
                    })
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
            },
            async editWordSet(){
                await axios.put("/wordSet/editWordSet", {
                title: this.title,
                description: this.description,
                wordSet_id: this.$store.state.idWordSet
                })
                .then(async (res) => {
                    await axios.post("/wordSet/getWordSetByUsername", {
                    username: this.username
                    })
                    .then((res) => {
                        this.allWordSet = res.data,
                        this.title = '',
                        this.description = ''
                        this.setPopup()
                    })
                    .catch((err) => {
                        alert(err.response.data.message)
                    })
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
            },
            async deleteWordSet(){
                await axios.delete("/wordSet/deleteWordSetByID", {
                    data: {wordSet_id: this.$store.state.idWordSet}
                })
                .then(async (res) => {
                    await axios.post("/wordSet/getWordSetByUsername", {
                    username: this.username
                    })
                    .then((res) => {
                        this.allWordSet = res.data
                        this.setPopup('deleteWordSet')
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