import axios from "axios";
import {API_TEST} from "./apiConfig";
import {toast} from "react-hot-toast";

export const userLang = navigator.language || navigator.userLanguage

export const $resp = axios.create({
    baseURL: API_TEST,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token'),
        Lang: userLang
    }
})


export const getPostData = (url, data) => {
    return $resp
        .post(url, data)
        .then(res => {
            return res.data
        })
        .catch(err => {
            if (!err?.response) {
                toast.error('No Server Response')
            } else if (err?.response.status === 403) {
                localStorage.removeItem('token')
                document.location.replace('/admin/login')
            } else {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            }
            return err
        })
}

export const putData = (url, data) => {
    return $resp
        .put(url, data)
        .then(res => {
            toast.success('Success !')
            return res.data
        })
        .catch(err => {
            if (!err?.response) {
                toast.error('No Server Response')
            } else if (err?.response.status === 403) {
                localStorage.removeItem('token')
                document.location.replace('/admin/login')
            } else {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            }
            return err
        })
}

export const getData = (url) => {
    return $resp
        .get(url)
        .then(res => {
            return res.data
        })
        .catch(err => {
            if (!err?.response) {
                toast.error('No Server Response')
            } else if (err?.response.status === 403) {
                localStorage.removeItem('token')
                document.location.replace('/admin/login')
            } else {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            }
            return err
        })
}