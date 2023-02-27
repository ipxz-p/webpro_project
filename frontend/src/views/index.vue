<template>
    <div id="app" class="">


        <section class="sec1 flex min-h-full ">
            <div class="sec1-left ">
                <h1 class="text-5xl font-bold mx-9 my-5 animate-fade-up animate-once animate-delay-1000 animate-ease-linear text-mystone-700">Do you <span class="text-mypurple-400 text-6xl">speak english</span> <span class="text-6xl">  ?</span></h1>
                <p class="text-base mx-9 animate-fade-left animate-ease-in-out text-mystone-700">If you want to speak English <br>
                    Vocabulary memorization is one of the parts that you will be able to speak English. <br>
                    You can use flash cards and guessing games to memorize words.</p>
                <div class="mx-9 my-6 animate-fade-down animate-once animate-delay-1000 animate-ease-in-out animate-alternate">
                    <!-- <a href="http://127.0.0.1:5173/play" class="text-center bg-mypink-300 text-white py-3 px-7
                    rounded text-xl hover:bg-mypink-400 transition-all">Let Play</a> -->
                    <a href="http://127.0.0.1:5173/play" class="inline-flex items-center gap-2 py-4 px-6 bg-mypink-300 text-white text-xl rounded-2xl hover:bg-opacity-80 h4 group">
                        Let Play
                    <img src="../assets/img/arrow-right-white.svg" class="w-6 group-hover:translate-x-1 transition" alt="">
                    </a>
                </div>
                
                
            </div>
            <div class="sec1-right">
                <div class="cartoon1 animate-fade-left animate-ease-in-out">
                    <img src="../assets/img/cartoon1.png" alt="" class="cartoon1">
                </div>
                
            </div>
        </section>

        <!-- SECTION 2 DEMO GAME -->
        <section class="sec2 flex min-h-full  bg-mystone-100">
            <div class="sec2-left p-5 pl-10">
                <h2 class="text-l font-bold text-gray-800">Game Mode</h2>
                <h2 class="text-3xl font-bold my-3 text-gray-800">Fun and Effective Ways to<br>
                    Learn<span class="text-mypurple-400"> English Vocabulary</span> </h2>
                <p> Don't give up just yet. Today we're going to look at 2 fun ways <br>
                    to learn vocabulary words… effectively!
                </p>
                    <button class="my-4 block min-w-lg max-w-lg p-6 bg-mystone-100 border border-gray-200 rounded-lg shadow hover:bg-mypink-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">Flash Card Game</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest lorem50 enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </button>
                <button class="my-4 block  max-w-lg p-6 bg-mystone-100 border border-gray-200 rounded-lg shadow hover:bg-mypink-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">Guessing Game</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </button>
                
                
                

            </div>
            <div class="sec2-right w-full">
                <div class="showdemo bg-mystone-200 w-9/12 h-96 rounded-3xl">
                    
                </div>
            </div>
        </section>
        
        <!-- SECTION 3 DEMO GAME -->










    </div>
</template>

<script>
    
    export default {
        data(){
            return{

            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
#app{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
}
.sec1-right{
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.sec1-left{
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.cartoon1{
    margin: 20px;
    width: 380px;
}

.sec2{
    display: flex;
    justify-content: center;
    align-items: center;
}


.sec2-right{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sec2-left{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>