import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://cadvue-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://cadvue-default-rtdb.firebaseio.com/'
        })
    }
})