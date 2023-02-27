<template>
    <div id="contain">
        <!-- <div class="nav">
            <NavGame />
        </div>
        <div class="card">
            <Card />
        </div> -->
        <Card />
    </div>
</template>

<script>
import NavGame from './NavGame.vue';
import Card from '../components/Card.vue';
export default {
    name: 'FlashCard',
    components: {
        NavGame,
        Card
    },
};
</script>

<style scoped>
#contain {
    position: fixed;
    width: 100%;
    height: 100%;
}
.card{
    height : calc(100% - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E6E2FA;
}



</style>