<template>
    <div>
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">Gat Pat</p>
            <button class="px-4 py-2 bg-mypink rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <p>Add</p>
            </button>
        </div>
        <v-data-table-virtual
            :headers="headers"
            :items="Words"
            item-value="name"
            class="elevation-1 mt-4"
        >
            <template v-slot:item.Thai="{ item }">
                <p style="word-break: break-word;">
                    {{ item.raw.Thai }}
                </p>
            </template>
            <template v-slot:item.type="{ item }">
                <div class="flex justify-between items-center">
                    <div class="p-2 bg-yellow-100 text-yellow-600 rounded-xl inline-block mr-2">
                    {{ item.raw.type }}
                    </div>
                    <!-- <div>
                        <svg fill="currentColor"
                        class="cursor-pointer h-6 w-4 text-gray-500 outline-0" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.055 32.055" xml:space="preserve" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path> </g> </g>
                        </svg>
                    </div> -->
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <div class="flex gap-3">
                    <v-icon
                        size="small"
                        class="mr-2 cursor-pointer"
                        @click="editItem()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                    </v-icon>
                    <v-icon
                        size="small"
                        class="cursor-pointer"
                        @click="deleteItem()"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </v-icon>
                </div>
            </template>
        </v-data-table-virtual>
        
    </div>
</template>

<script>
    export default {
        data: () => ({
        headers: [
            { title: 'No.', key: 'Number', width: '0%'},
            { title: 'Thai', key: 'Thai' },
            { title: 'English', key: 'English' },
            { title: 'Type', key: 'type' },
            { title: 'Actions', key: 'actions', sortable: false, width: '0%' },
        ],
        Words: [
                {
                Number: '1',
                Thai: 'ปาม',
                English: 'Palm',
                type: "Noun",
                },
                {
                Number: '2',
                Thai: 'ปามwewqewqew',
                English: 'Palm',
                type: "Verb",
                },
        ],
        
        }),
        methods: {
            
        },
        }
</script>

<style lang="scss">

</style>