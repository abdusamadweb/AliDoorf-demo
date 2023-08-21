import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AttachmentForm from "../../../../../../components/admin/AttachmentForm";

const PrimeImg = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'main_direction_prime_img',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [file1, setFile1] = useState(null)

    useEffect(() => {
        setFile1(result?.data?.main_direction_prime_img)
    }, [result, effect])


    return (
        <div className='mb2'>
            <AttachmentForm
                value='main_direction_prime_img'
                valueRu={file1}
                valueEn={file1}
                valueUz={file1}
                setValueRu={setFile1}
                setValueEn={setFile1}
                setValueUz={setFile1}
                formTitle={'Primeloft img'}
                setEffect={setEffect}
                one={true}
            />
        </div>
    )
}

export default PrimeImg
