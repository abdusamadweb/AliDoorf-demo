import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../api/apiResp";
import AdminForm from "../../../../../components/admin/AdminForm";

const Parallax = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'main_page_parallax'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [text, setText] = useState('')

    useEffect(() => {
        setText(result?.data?.main_page_parallax)
    }, [result, effect])


    return (
        <AdminForm
            value='main_page_parallax'
            valueRu={text}
            valueEn={text}
            valueUz={text}
            setValueRu={setText}
            setValueEn={setText}
            setValueUz={setText}
            formTitle={'Parallax text'}
            setEffect={setEffect}
            one={'p'}
        />
    )
}

export default Parallax
