<template>
    <div @click="setPopup()" class="bg-[rgba(0,0,0,.4)] fixed flex items-center justify-center inset-0 z-[100]">
        <div class=" bg-white p-4 rounded-lg max-w-[340px] w-full fixed">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            setPopup(){
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
            }
        },
    }
</script>

<style>

</style>