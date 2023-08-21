import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../api/apiResp";
import AttachmentForm from "../../../components/admin/AttachmentForm";

const AdminLogo = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'logo',
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [file1, setFile1] = useState(null)
    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)

    useEffect(() => {
        setFile1(result?.data?.logo_ru)
        setFile2(result?.data?.logo_en)
        setFile3(result?.data?.logo_uz)
    }, [result, effect])


    return (
        <div className='content mb2'>
            <AttachmentForm
                value='logo'
                valueRu={file1}
                valueEn={file2}
                valueUz={file3}
                setValueRu={setFile1}
                setValueEn={setFile2}
                setValueUz={setFile3}
                formTitle={'Site Logo'}
                setEffect={setEffect}
            />
        </div>
    )
}

export default AdminLogo
