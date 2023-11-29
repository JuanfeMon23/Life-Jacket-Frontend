import axios from "axios";

const conection = axios.create({
    baseURL : import.meta.env.VITE_BACKEND || 'http://localhost:3000/api',
    withCredentials : true
});

export default conection;

