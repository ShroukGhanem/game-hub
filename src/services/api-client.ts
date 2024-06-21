import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'aa173f8a4d9f463ea21371f285bbdc85'
    }
})