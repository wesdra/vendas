import axios from 'axios';
const api = axios.create({
   
    baseURL: 'https://wrwebleilao.azurewebsites.net',
});
   // baseURL: 'http://localhost:6449',
//baseURL: 'https://megaoutletsofa.com.br',
//baseURL: 'https://megaoutletsofa.com.br',
export default api; 