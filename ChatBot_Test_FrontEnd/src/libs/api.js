import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API
})
export default api