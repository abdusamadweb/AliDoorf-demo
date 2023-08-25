import axios from "axios";
import {API_TEST} from "./apiConfig";
import {toast} from "react-hot-toast";

export const userLang = navigator.language || navigator.userLanguage

export const $resp = axios.create({
    baseURL: API_TEST,
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token'),
        Lang: userLang,
        "Accept-Language": userLang
    }
})


export const header = (lang) => {
    return {
        "Content-Type": "application/json",
        Lang: lang,
        "Accept-Language": lang
    }
}


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

export const deleteData = (url) => {
    return $resp
        .delete(url)
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

// img
export const postAttachment = (url, files) => {
    const toastId = toast.loading('Uploading . . .')

    const file = files[0]
    const formData = new FormData()
    formData.append('file', file)

    return $resp
        .post(url, formData, {
            headers: {
                "Content-type": "multipart/form-data",
            }
        })
        .then(res => {
            toast.success('Uploaded !', {
                id: toastId
            })
            setTimeout(() => toast.dismiss(toastId), 2000)

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
            toast.error('File didnt upload !', {
                id: toastId
            })
            setTimeout(() => toast.dismiss(toastId), 2000)

            return err
        })
}

export const getPostDataUser = (url, data, lang) => {
    return $resp
        .post(url, data, {
            headers: header(lang)
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            if (!err?.response) {
                toast.error('No Server Response')
            } else if (err?.response.status === 403) {
                localStorage.removeItem('token')
                // document.location.replace('/admin/login')
            } else {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            }
            return err
        })
}

export const getData = (url, lang) => {
    return $resp
        .get(url, {
            headers: header(lang)
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            if (!err?.response) {
                toast.error('No Server Response')
            } else if (err?.response.status === 403) {
                localStorage.removeItem('token')
                // document.location.replace('/admin/login')
            } else {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            }
            return err
        })
}