import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const ContentTitles = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_cont_tit`,
        `${type}_cont_desc`,
        `${type}_cont_sub`
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

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    const [subRu, setSubRu] = useState('')
    const [subEn, setSubEn] = useState('')
    const [subUz, setSubUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.[`${type}_cont_tit_ru`])
        setTitEn(result?.data?.[`${type}_cont_tit_en`])
        setTitUz(result?.data?.[`${type}_cont_tit_uz`])

        setDescRu(result?.data?.[`${type}_cont_desc_ru`])
        setDescEn(result?.data?.[`${type}_cont_desc_en`])
        setDescUz(result?.data?.[`${type}_cont_desc_uz`])

        setSubRu(result?.data?.[`${type}_cont_sub_ru`])
        setSubEn(result?.data?.[`${type}_cont_sub_en`])
        setSubUz(result?.data?.[`${type}_cont_sub_uz`])
    }, [result, effect])


    return (
        <div>
            <AdminForm
                value={`${type}_cont_tit`}
                valueRu={titRu}
                valueEn={titEn}
                valueUz={titUz}
                setValueRu={setTitRu}
                setValueEn={setTitEn}
                setValueUz={setTitUz}
                formTitle={'Title'}
                setEffect={setEffect}
                textarea={true}
                one={false}
                setType={setType}
            />

            <AdminForm
                value={`${type}_cont_desc`}
                valueRu={descRu}
                valueEn={descEn}
                valueUz={descUz}
                setValueRu={setDescRu}
                setValueEn={setDescEn}
                setValueUz={setDescUz}
                formTitle={'Description'}
                setEffect={setEffect}
                textarea={true}
                one={false}
                setType={setType}
            />

            <AdminForm
                value={`${type}_cont_sub`}
                valueRu={subRu}
                valueEn={subEn}
                valueUz={subUz}
                setValueRu={setSubRu}
                setValueEn={setSubEn}
                setValueUz={setSubUz}
                formTitle={'Bold text'}
                setEffect={setEffect}
                textarea={true}
                one={false}
                setType={setType}
            />
        </div>
    )
}

export default ContentTitles
