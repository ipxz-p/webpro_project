<template>
    <router-link :to="{name: 'WordByID', params: {id} }" class="cursor-pointer border-2 border-yellow-400 rounded-lg px-4 py-3 bg-yellow-100">
                <div class="flex justify-between items-center">
                    <h1 class="text-lg font-medium  truncate">{{ name }}</h1>
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                            class="inline-flex w-full bg-yellow-500 justify-center rounded-md bg-opacity-20 p-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <div>
                                    <div class="h-1 w-1 mb-[0.1rem] bg-black rounded-full"></div>
                                    <div class="h-1 w-1 mb-[0.1rem] bg-black rounded-full"></div>
                                    <div class="h-1 w-1 bg-black rounded-full"></div>
                                </div>
                            </MenuButton>
                        </div>

                        <transition
                            enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <!-- menu item start here -->
                            <MenuItems
                            class="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div @click.prevent="setPopup('editWordSet'), setIdPopup(id)" class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                                        active ? 'bg-pink-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm ',
                                        ]"
                                        
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
                                        Edit
                                    </button>
                                    </MenuItem>
                                </div>
                                <div @click.prevent="setIdPopup(id), setPopup('deleteWordSet')" class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                                        active ? 'bg-red-600 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    Delete
                                    </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <p class="text-gray-500 truncate">{{ description }}</p>
                <div class="flex items-center mt-3">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        <p>{{ total_word }} words</p>
                    </div>
                    <div class="h-1 w-1 rounded-full bg-black mx-2"></div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        <p>{{ total_play }}</p>
                    </div>
                </div>
    </router-link>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
    export default {
        props: ['id', 'name', 'description', 'total_word', 'total_play'],
        components: {
            Menu,
            MenuButton,
            MenuItems,
            MenuItem

        },
        methods:{
            // set id for update wordset
            setIdPopup(id){
                this.$store.commit('setidWordSet', id)
            },
            setPopup(type){
                // $parent access data from parent to child
                this.$parent.title = this.name
                this.$parent.description = this.description
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
                this.$store.commit('settypePopup', type)
            },
        }
    }
</script>
