import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../components/admin/AdminForm";
import {getPostData} from "../../../../api/apiResp";

const MenuBgText = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'menu_bg_txt'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.menu_bg_txt_ru)
        setTitEn(result?.data?.menu_bg_txt_en)
        setTitUz(result?.data?.menu_bg_txt_uz)
    }, [result, effect])


    return (
        <AdminForm
            value='menu_bg_txt'
            valueRu={titRu}
            valueEn={titEn}
            valueUz={titUz}
            setValueRu={setTitRu}
            setValueEn={setTitEn}
            setValueUz={setTitUz}
            formTitle={'Background text'}
            setEffect={setEffect}
            one={false}
        />
    )
}

export default MenuBgText
