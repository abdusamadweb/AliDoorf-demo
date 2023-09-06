import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const AboutHeroStaticText = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_hero_static_txt`
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
        setTitRu(result?.data?.[`${type}_about_hero_static_txt_ru`])
        setTitEn(result?.data?.[`${type}_about_hero_static_txt_en`])
        setTitUz(result?.data?.[`${type}_about_hero_static_txt_uz`])
    }, [result, effect])


    return (
        <AdminForm
            value={`${type}_about_hero_static_txt`}
            valueRu={titRu}
            valueEn={titEn}
            valueUz={titUz}
            setValueRu={setTitRu}
            setValueEn={setTitEn}
            setValueUz={setTitUz}
            formTitle={'Animation static text'}
            setEffect={setEffect}
            one={false}
            setType={setType}
        />
    )
}

export default AboutHeroStaticText
