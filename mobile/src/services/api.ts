import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecoleta.tomcruz.dev/api'
});

export default api;