import axios from 'axios';

export const API_TEST = 'http://alidoorf.uz/'


const $api = axios.create({
    baseURL: API_TEST,
    headers: {
        "Content-Type": "application/json"
    }
})

export default $api