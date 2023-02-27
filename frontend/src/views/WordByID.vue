<template>
    <div>
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">Gat Pat</p>
            <button @click="setPopup('addWord')" class="px-4 py-2 bg-mypink rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <p>Add</p>
            </button>
        </div>
        <!-- table container -->
        <v-data-table-virtual
            v-if="Words.length > 0"
            :headers="headers"
            :items="Words"
            item-value="name"
            class="elevation-1 mt-4"
        >
            <template v-slot:item.type="{ item }">
                <div class="flex justify-between items-center">
                    <div class="p-2 bg-yellow-100 text-yellow-600 rounded-xl inline-block mr-2">
                    {{ item.raw.type }}
                    </div>
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <div class="flex gap-3">
                    <div
                        class="mr-2 cursor-pointer"
                        @click="editItem()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    </div>
                    <div
                        class="cursor-pointer"
                        @click="deleteItem()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </div>
                </div>
            </template>
        </v-data-table-virtual>
        <div v-else>
            no data
        </div>
        <Popup type="addWord" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'addWord'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Add word</p>
                    <svg @click="setPopup('addWord')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <div class="mt-4">
                    <h1 class="text-lg">Thai word</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="thai" class="outline-0 w-full h-full" type="text" name="" placeholder="Title of word set" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1 class="text-lg">English word</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="eng" class="outline-0 w-full h-full" type="text" name="" placeholder="Add description" >
                        </div>
                    </div>
                    <div class="mt-2">
                        <h1 class="text-lg">Type</h1>
                        <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="type" class="outline-0 w-full h-full" type="text" name="" placeholder="Add description" >
                        </div>
                    </div>
                    <button @click="addWord()" class="w-full bg-mypink text-white py-2 mt-4 rounded-xl" type="submit">Add</button>
            </div>
        </Popup>
    </div>
</template>

<script>
    import Popup from '../components/Popup.vue';
    import axios from '../axios';
    export default {
        data: () => ({
            headers: [
                { title: 'No.', key: 'index', width: '0%'},
                { title: 'Thai', key: 'thai' },
                { title: 'English', key: 'english' },
                { title: 'Type', key: 'type' },
                { title: 'Actions', key: 'actions', sortable: false, width: '0%' },
            ],
            Words: [],
            thai: '',
            eng: '',
            type: '',
            index: 1
            }),
            methods: {
                setPopup(type){
                    this.thai = '',
                    this.eng = '',
                    this.type = '',
                    this.$store.commit('setshowPopup', this.$store.state.showPopup)
                    this.$store.commit('settypePopup', type)
                },
                addWord: async function addWord(){
                    await axios.put("/word/addWord", {
                        thai: this.thai,
                        english: this.eng,
                        type: this.type,
                        wordset_id: this.$route.params.id
                    })
                    .then(async (res) => {
                        await axios.post("/word/getAllWord", {
                            wordset_id: this.$route.params.id
                        })
                        .then((res) => {
                            this.Words = res.data
                            this.setPopup("addWord")
                        })
                        .catch((err) => {
                            console.log(err.response.data.message)
                        })
                        
                    })
                    .catch((err) => {
                        console.log(err.response.data.message)
                    })
                }
            },
            components: {
                Popup
            },
            async created() {
                await axios.post("/word/getAllWord", {
                    wordset_id: this.$route.params.id
                })
                .then((res) => {
                    this.Words = res.data
                })
            },
        }
</script>

<style lang="scss">

</style>