import axios from 'axios';

const api=axios.create({
    baseURL:"https://backend-kselvam-company-1.onrender.com/api" //backend url
})

//add a token to the request headers

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
})

export default api;