import { createStore } from "vuex";

const store = createStore({
    state: {
        food: 'ต้มยำกุ้ง',
        sport: 'ข่าไก่'
    },
    
    mutations: {
        setFood(state, food){
            state.food = food
        },
        setSport(state, sport){
            state.sport = sport
        }
    },
    getters: {
        food:state=>{
            return state.food
        },
        sport:state=>state.sport
        
    }
})

export default store;