import axios from "axios";

const backendAPI = 'http://localhost:3000/api'

export const loginRequest = userEmail => axios.post(`${backendAPI}/Login`, userEmail)