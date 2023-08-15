import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const TechTitles = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'ali_tech_sub',
        'ali_tech_tit'
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
        setSubRu(result?.data?.ali_tech_sub_ru)
        setSubEn(result?.data?.ali_tech_sub_en)
        setSubUz(result?.data?.ali_tech_sub_uz)

        setTitRu(result?.data?.ali_tech_tit_ru)
        setTitEn(result?.data?.ali_tech_tit_en)
        setTitUz(result?.data?.ali_tech_tit_uz)
    }, [result, effect])


    return (
        <div>
            <div className='admin-main__subtitle fw500 fz22 mb2'>Technologies section:</div>
            <AdminForm
                value='ali_tech_sub'
                valueRu={subRu}
                valueEn={subEn}
                valueUz={subUz}
                setValueRu={setSubRu}
                setValueEn={setSubEn}
                setValueUz={setSubUz}
                formTitle={'Subtitle'}
                setEffect={setEffect}
                one={false}
            />
            <AdminForm
                value='ali_tech_tit'
                valueRu={titRu}
                valueEn={titEn}
                valueUz={titUz}
                setValueRu={setTitRu}
                setValueEn={setTitEn}
                setValueUz={setTitUz}
                formTitle={'Title'}
                setEffect={setEffect}
                one={false}
            />
        </div>
    )
}

export default TechTitles
