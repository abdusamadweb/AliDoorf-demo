import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const AboutHero = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_hero_tit`
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
        setTitRu(result?.data?.[`${type}_about_hero_tit_ru`])
        setTitEn(result?.data?.[`${type}_about_hero_tit_en`])
        setTitUz(result?.data?.[`${type}_about_hero_tit_uz`])
    }, [result, effect])


    return (
        <AdminForm
            value={`${type}_about_hero_tit`}
            valueRu={titRu}
            valueEn={titEn}
            valueUz={titUz}
            setValueRu={setTitRu}
            setValueEn={setTitEn}
            setValueUz={setTitUz}
            formTitle={'Title'}
            setEffect={setEffect}
            one={false}
            setType={setType}
        />
    )
}

export default AboutHero
