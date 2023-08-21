import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../api/apiResp";

const MainHero = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'main_hero_sub',
        'main_hero_tit',
        'main_hero_tit_txt',
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

    const [titTxtRu, setTitTxtRu] = useState('')
    const [titTxtEn, setTitTxtEn] = useState('')
    const [titTxtUz, setTitTxtUz] = useState('')

    useEffect(() => {
        setSubRu(result?.data?.main_hero_sub_ru)
        setSubEn(result?.data?.main_hero_sub_en)
        setSubUz(result?.data?.main_hero_sub_uz)

        setTitRu(result?.data?.main_hero_tit_ru)
        setTitEn(result?.data?.main_hero_tit_en)
        setTitUz(result?.data?.main_hero_tit_uz)

        setTitTxtRu(result?.data?.main_hero_tit_txt_ru)
        setTitTxtEn(result?.data?.main_hero_tit_txt_en)
        setTitTxtUz(result?.data?.main_hero_tit_txt_uz)
    }, [result, effect])


    return (
        <div>
            <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section texts:</div>
            <AdminForm
                value='main_hero_sub'
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
                value='main_hero_tit'
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
            <AdminForm
                value='main_hero_tit_txt'
                valueRu={titTxtRu}
                valueEn={titTxtEn}
                valueUz={titTxtUz}
                setValueRu={setTitTxtRu}
                setValueEn={setTitTxtEn}
                setValueUz={setTitTxtUz}
                formTitle={'Title number text'}
                setEffect={setEffect}
                one={false}
            />
        </div>
    )
}

export default MainHero
