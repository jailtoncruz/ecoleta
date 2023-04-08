import axios from 'axios';

console.log(window.location.origin)
const api = axios.create({
    baseURL: window.location.origin.concat('/api')
})

export default api;