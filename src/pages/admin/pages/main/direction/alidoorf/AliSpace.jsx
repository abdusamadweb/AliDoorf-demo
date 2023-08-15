import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const AliSpace = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = 'main_direction_ali_space'
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', [arr])
            setResult(res)
        }
        get()
    }, [effect])

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    useEffect(() => {
        setDescRu(result?.data?.main_direction_ali_space_ru)
        setDescEn(result?.data?.main_direction_ali_space_en)
        setDescUz(result?.data?.main_direction_ali_space_uz)
    }, [result, effect])


    return (
        <AdminForm
            value={arr}
            valueRu={descRu}
            valueEn={descEn}
            valueUz={descUz}
            setValueRu={setDescRu}
            setValueEn={setDescEn}
            setValueUz={setDescUz}
            formTitle={'Alidoorf space'}
            setEffect={setEffect}
            one={false}
        />
    )
}

export default AliSpace
