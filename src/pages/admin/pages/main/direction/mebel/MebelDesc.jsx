import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../../api/apiResp";

const MebelDesc = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = 'main_direction_mebel_desc'
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
        setDescRu(result?.data?.main_direction_mebel_desc_ru)
        setDescEn(result?.data?.main_direction_mebel_desc_en)
        setDescUz(result?.data?.main_direction_mebel_desc_uz)
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
            formTitle={'Mebel desc'}
            setEffect={setEffect}
            textarea={true}
            one={false}
        />
    )
}

export default MebelDesc
