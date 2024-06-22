import axios from "axios";

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

const apiKey = import.meta.env.VITE_API_KEY

api.interceptors.request.use(async config => {

    config.headers.authorization = `Bearer ${apiKey} `

    return config
})

export default api