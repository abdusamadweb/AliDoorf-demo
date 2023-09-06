import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const NewsTitles = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_news_news_sub`,
        `${type}_news_news_tit`
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [subRu, setSubRu] = useState('')
    const [subEn, setSubEn] = useState('')
    const [subUz, setSubUz] = useState('')

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setSubRu(result?.data?.[`${type}_news_news_sub_ru`])
        setSubEn(result?.data?.[`${type}_news_news_sub_en`])
        setSubUz(result?.data?.[`${type}_news_news_sub_uz`])

        setTitRu(result?.data?.[`${type}_news_news_tit_ru`])
        setTitEn(result?.data?.[`${type}_news_news_tit_en`])
        setTitUz(result?.data?.[`${type}_news_news_tit_uz`])
    }, [result, effect])


    return (
        <div>
            <AdminForm
                value={`${type}_news_news_sub`}
                valueRu={subRu}
                valueEn={subEn}
                valueUz={subUz}
                setValueRu={setSubRu}
                setValueEn={setSubEn}
                setValueUz={setSubUz}
                formTitle={'Subtitle'}
                setEffect={setEffect}
                one={false}
                setType={setType}
            />
            <AdminForm
                value={`${type}_news_news_tit`}
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
        </div>
    )
}

export default NewsTitles
