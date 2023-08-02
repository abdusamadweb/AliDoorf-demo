import axios from 'axios';

export const API_URL = 'https://alidoorf.uz/'
export const API_TEST = 'http://34.237.97.115:8081/'

const $api = axios.create({
    baseURL: API_TEST,
});

export default $api