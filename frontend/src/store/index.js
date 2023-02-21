import { createStore } from "vuex";
import { mutations } from "./mutations";
const store = createStore({
    state: {
        navMobile: false,
        userName: JSON.parse(localStorage.getItem('user')) || "",
        showPopup: false
    },
    mutations: mutations,
    getters: {
        navMobile:state=>state.navMobile,
        userName:state=>state.userName,
        showPopup:state=>state.showPopup
    }
})

export default store;