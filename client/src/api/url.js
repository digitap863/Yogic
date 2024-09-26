import axios from "axios"

const url =import.meta.env.MODE === "development"?'http://localhost:3000/api':'https://snescollege.ac.in/api'
export const AxiosAdmin = axios.create({
    baseURL:url
})