<template>
  <div class="#appp">

    <div class="card-ing1">
      <nav class="bg-mypurple-400">
            <labell for="" class="text-2xl logo">Seravabi</labell>
            <ul>
                <li>Score {{ score_knew }}/10</li>
                <li>10 ข้อ </li>
                <li><a href="#">Exit</a></li>
                
            </ul>
        </nav>
    </div>
    <!-- All card -->
    <div class="card-ing2">
      <swiper :slidesPerView="3" :spaceBetween="30" :navigation="true" :modules="modules" class="mySwiper">
      <!-- card -->
      <swiper-slide v-for="index in 10" :key="index">
        <label>
          <input type="checkbox" />
          <div class="flip-card">
            <div class="front">
              <h1>{{ index }}</h1>
              <h2>vocab</h2>
              <b>(n)</b>
              <p>Click to flip</p>
            </div>
            <div class="back">
              <h1>{{ index }}</h1>
              <h1>จัดเตรียม</h1>
              <button class="button" @click="score_count1(index)">knew it</button>
              <hr>
              <button class="button" @click="score_count2(index)">dont knew it</button>
              <p class="click">Click to flip</p>
            </div>
          </div>
        </label>
      </swiper-slide>
      <!-- Card Finish -->
      <swiper-slide>
        <label>
          <div class="flip-card">
            <div class="front">
              <h1>Finish</h1>
            </div>
          </div>
        </label>
      </swiper-slide>
    </swiper>
    </div>
    <p>score_knew: {{ score_knew }}
      score_dontknew: {{ score_dontknew }}</p>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  data(){
    return {
      score_knew: 0,
      score_dontknew: 0,
      indexcheck: [],
      indexcheck2: [],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods:{
    score_count1(index){
      if(!this.indexcheck.includes(index) && !this.indexcheck2.includes(index)){
        this.indexcheck.push(index);
        this.score_knew += 1
      }
    },
    score_count2(index){
      if(!this.indexcheck.includes(index) && !this.indexcheck2.includes(index)){
        this.indexcheck2.push(index);
        this.score_dontknew += 1
      }
    }



  }
};


</script>