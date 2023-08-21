import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AttachmentForm from "../../../../../../components/admin/AttachmentForm";

const AboutHeroImg = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'ali_about_hero_img',
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
        setFile1(result?.data?.ali_about_hero_img)
    }, [result, effect])


    return (
        <div className='mb2'>
            <AttachmentForm
                value='ali_about_hero_img'
                valueRu={file1}
                valueEn={file1}
                valueUz={file1}
                setValueRu={setFile1}
                setValueEn={setFile1}
                setValueUz={setFile1}
                formTitle={'Background img'}
                setEffect={setEffect}
                one={true}
            />
        </div>
    )
}

export default AboutHeroImg
