import axios from 'axios';

// set default base url for every request
export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})