import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../api/apiResp";
import AttachmentForm from "../../../../../components/admin/AttachmentForm";

const MainHeroVideo = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'main_page_video',
        'main_page_video_img'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [text, setText] = useState('')
    const [text2, setText2] = useState('')

    useEffect(() => {
        setText(result?.data?.main_page_video)
        setText2(result?.data?.main_page_video_img)
    }, [result, effect])


    return (
        <div className='mb2'>
            <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section Video:</div>
            <AttachmentForm
                value='main_page_video'
                valueRu={text}
                valueEn={text}
                valueUz={text}
                setValueRu={setText}
                setValueEn={setText}
                setValueUz={setText}
                formTitle={'Video'}
                setEffect={setEffect}
                one={true}
            />
            <br/>
            <AttachmentForm
                value='main_page_video_img'
                valueRu={text2}
                valueEn={text2}
                valueUz={text2}
                setValueRu={setText2}
                setValueEn={setText2}
                setValueUz={setText2}
                formTitle={'Video Img'}
                setEffect={setEffect}
                one={true}
            />
        </div>
    )
}

export default MainHeroVideo
