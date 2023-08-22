import axios from 'axios';

export const API_TEST = 'http://44.214.169.124:8081/'


const $api = axios.create({
    baseURL: API_TEST,
    headers: {
        "Content-Type": "application/json"
    }
})

export default $api