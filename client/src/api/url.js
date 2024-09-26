import axios from "axios"

const url =import.meta.env.MODE === "development"?'http://localhost:3000/api':'https://yogic-1.onrender.com'
export const AxiosAdmin = axios.create({
    baseURL:url
})