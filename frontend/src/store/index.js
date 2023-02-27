import { createStore } from "vuex";

const store = createStore({
    state: {
        navMobile: false
    },
    
    mutations: {
        setnavMobile(state, navMobile){
            state.navMobile = !navMobile
        },
    },
    getters: {
        navMobile:state=>state.navMobile
        
    }
})

export default store;