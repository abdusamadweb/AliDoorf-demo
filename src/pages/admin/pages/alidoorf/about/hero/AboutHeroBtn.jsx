import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../../api/apiResp";

const AboutHeroBtn = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_hero_btn`
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.[`${type}_about_hero_btn_ru`])
        setTitEn(result?.data?.[`${type}_about_hero_btn_en`])
        setTitUz(result?.data?.[`${type}_about_hero_btn_uz`])
    }, [result, effect])


    return (
        <AdminForm
            value={`${type}_about_hero_btn`}
            valueRu={titRu}
            valueEn={titEn}
            valueUz={titUz}
            setValueRu={setTitRu}
            setValueEn={setTitEn}
            setValueUz={setTitUz}
            formTitle={'Button text'}
            setEffect={setEffect}
            one={false}
            setType={setType}
        />
    )


}

export default AboutHeroBtn
