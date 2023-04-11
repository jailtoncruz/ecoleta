import axios from 'axios';

const api = axios.create({
    baseURL: window.location.origin.concat('/api')
    // baseURL: "http://localhost:3333/api"
})

export default api;