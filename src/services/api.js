import axios from "axios";

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})

api.interceptors.request.use(async config => {

    config.headers.authorization = `Bearer ZH46rKFzrCCDslxJqcvm`

    return config
})

export default api