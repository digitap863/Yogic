import axios from "axios"

export const url ='http://localhost:3000/api'
export const AxiosAdmin = axios.create({
    baseURL:url
})
