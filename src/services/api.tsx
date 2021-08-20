import axios from 'axios';

const api = axios.create({
    baseURL: 'https://megaoutletsofa.com.br',
});

export default api;