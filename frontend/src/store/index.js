import { createStore } from "vuex";
import { mutations } from "./mutations";
const store = createStore({
    state: {
        navMobile: false,
        usernName: JSON.parse(localStorage.getItem('user')) 
    },
    mutations: mutations,
    getters: {
        navMobile:state=>state.navMobile,
        userName:state=>state.usernName
    }
})

export default store;