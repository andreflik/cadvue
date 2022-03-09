import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 

//Headrs Axios
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: ''
            
        })
    }
})