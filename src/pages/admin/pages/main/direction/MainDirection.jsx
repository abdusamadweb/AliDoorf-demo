import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../api/apiResp";

const MainDirection = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = 'main_direction_tit'
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', [arr])
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.main_direction_tit_ru)
        setTitEn(result?.data?.main_direction_tit_en)
        setTitUz(result?.data?.main_direction_tit_uz)
    }, [result, effect])


    return (
        <AdminForm
            value={arr}
            valueRu={titRu}
            valueEn={titEn}
            valueUz={titUz}
            setValueRu={setTitRu}
            setValueEn={setTitEn}
            setValueUz={setTitUz}
            formTitle='Title'
            setEffect={setEffect}
            one={false}
        />
    )
}

export default MainDirection
