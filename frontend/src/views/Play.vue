<template>
    <div id="app">
        <section>
            <div class="flex flex-col gap-4">
                <span class="animate-headShake text-3xl font-extrabold text-mypink-400 p-10">Choose the game !</span>
            </div>
        </section>
        <section>
            <div class="flex">
            <router-link to="/play/flashcard" class="px-10 animate-wiggle ">
                <div class="flex justify-center transform transition duration-500 hover:scale-105">
                    <div class="rounded-lg shadow-lg max-w-sm bg-myyellow-100">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                                alt="" />
                        </a>
                        <div class="p-6">
                            <div class="flex flex-col gap-4">
                                <span class="animate-flash text-2xl font-extrabold text-mypink-400">Flash Card</span>
                            </div>
                            <p class="text-mypink-300 text-base mb-4">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </router-link>

            <router-link to="/play/guessinggame" class="px-10 animate-wiggle">
                <div class="flex justify-center transform transition duration-500 hover:scale-105">
                    <div class="rounded-lg shadow-lg max-w-sm  bg-myyellow-100">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                                alt="" />
                        </a>
                        <div class="p-6">
                            <div class="flex flex-col gap-4">
                                <span class="animate-flash text-2xl font-extrabold text-mypink-400">Guessing Game</span>
                            </div>
                            <p class="text-mypink-300 text-base mb-4">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        </section>
        
    </div>
</template>

<script>
import FlashCard from "./FlashCard.vue";
export default {
    name: "Play",
    components: {
        FlashCard,
    },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

</style>