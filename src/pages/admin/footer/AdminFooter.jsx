import './AdminFooter.scss'
import React, {useEffect, useState} from 'react'
import AdminForm from "../../../components/admin/AdminForm";
import {getPostData} from "../../../api/apiResp";

const AdminFooter = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'footer_flw_txt',
        'footer_desc_txt',
        'footer_bot_txt'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [flwRu, setFlwRu] = useState('')
    const [flwEn, setFlwEn] = useState('')
    const [flwUz, setFlwUz] = useState('')

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    const [botRu, setBotRu] = useState('')
    const [botEn, setBotEn] = useState('')
    const [botUz, setBotUz] = useState('')

    useEffect(() => {
        setFlwRu(result?.data?.footer_flw_txt_ru)
        setFlwEn(result?.data?.footer_flw_txt_en)
        setFlwUz(result?.data?.footer_flw_txt_uz)

        setDescRu(result?.data?.footer_desc_txt_ru)
        setDescEn(result?.data?.footer_desc_txt_en)
        setDescUz(result?.data?.footer_desc_txt_uz)

        setBotRu(result?.data?.footer_bot_txt_ru)
        setBotEn(result?.data?.footer_bot_txt_en)
        setBotUz(result?.data?.footer_bot_txt_uz)
    }, [result, effect])


    return (
        <div className='admin-footer admin-main admin-page'>
            <div className='menu__title fw500 fz24 mb3'>Footer</div>
            <AdminForm
                value='footer_flw_txt'
                valueRu={flwRu}
                valueEn={flwEn}
                valueUz={flwUz}
                setValueRu={setFlwRu}
                setValueEn={setFlwEn}
                setValueUz={setFlwUz}
                formTitle={'Follow text'}
                setEffect={setEffect}
                one={false}
            />

            <AdminForm
                value='footer_desc_txt'
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
            />

            <AdminForm
                value='footer_bot_txt'
                valueRu={botRu}
                valueEn={botEn}
                valueUz={botUz}
                setValueRu={setBotRu}
                setValueEn={setBotEn}
                setValueUz={setBotUz}
                formTitle={'Bottom text'}
                setEffect={setEffect}
                one={false}
            />
        </div>
    )
}

export default AdminFooter
