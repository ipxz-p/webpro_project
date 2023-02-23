import { createStore } from "vuex";
import { mutations } from "./mutations";
const store = createStore({
    state: {
        navMobile: false,
        userName: JSON.parse(localStorage.getItem('user')) || "",
        showPopup: false,
        typePopup: '',
        idWordSet: 0
    },
    mutations: mutations,
    getters: {
        navMobile:state=>state.navMobile,
        userName:state=>state.userName,
        showPopup:state=>state.showPopup,
        typePopup:state=>state.typePopup,
        idWordSet:state=>state.idWordSet
    }
})

export default store;