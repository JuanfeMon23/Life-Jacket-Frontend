import axios from "axios";

const conection = axios.create({
    baseURL : 'http://localhost:3000/api'
});

export default conection;

