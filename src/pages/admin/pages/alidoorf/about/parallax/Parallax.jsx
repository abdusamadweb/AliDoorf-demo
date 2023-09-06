import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../../api/apiResp";

const Parallax = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_parallax`
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
        setText(result?.data?.[`${type}_about_parallax`])
    }, [result, effect])


    return (
        <AdminForm
            value={`${type}_about_parallax`}
            valueRu={text}
            valueEn={text}
            valueUz={text}
            setValueRu={setText}
            setValueEn={setText}
            setValueUz={setText}
            formTitle={'Parallax text'}
            setEffect={setEffect}
            one={'p'}
            setType={setType}
        />
    )
}

export default Parallax
