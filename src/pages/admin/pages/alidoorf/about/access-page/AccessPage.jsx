import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../../../../api/apiResp";

const AccessPage = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'ali_about_page_access'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [access, setAccess] = useState('false')

    useEffect(() => {
        setAccess(result?.data?.ali_about_page_access || 'false')
    }, [result, effect])

    const postData = () => {
        const updatedAccess = access === 'true' ? 'false' : 'true'
        const item = {
            key: 'ali_about_page_access',
            valueRu: updatedAccess,
            valueEn: updatedAccess,
            valueUz: updatedAccess
        }

        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div
            className={`checkbox no-copy ${access === 'true' ? 'active' : ''}`}
            onClick={postData}
        >
            <i className="fa-solid fa-check icon"/>
        </div>
    )
}

export default AccessPage
