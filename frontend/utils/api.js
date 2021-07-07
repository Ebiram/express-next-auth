import axios from 'axios'
import { logOut } from './auth'

const api = () => {
    const api = axios.create({
        baseURL: 'http://localhost:5000/api',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return api
}

export default api
