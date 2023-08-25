import axios from 'axios';

export const API_TEST = 'http://45.84.225.20:8081/'


const $api = axios.create({
    baseURL: API_TEST,
    headers: {
        "Content-Type": "application/json"
    }
})

export default $api