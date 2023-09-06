import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../../../../api/apiResp";

const AccessPage = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_home_page_access`
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [access, setAccess] = useState('false')

    useEffect(() => {
        setAccess(result?.data?.[`${type}_home_page_access`] || 'false')
    }, [result, effect])

    const postData = () => {
        const updatedAccess = access === 'true' ? 'false' : 'true'
        const item = {
            key: `${type}_home_page_access`,
            valueRu: updatedAccess,
            valueEn: updatedAccess,
            valueUz: updatedAccess
        }

        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }

    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }

    return (
        <div className='row flex-column align-center'>
            <div
                className={`checkbox no-copy ${access === 'true' ? 'active' : ''}`}
                onClick={postData}
            >
                <i className="fa-solid fa-check icon"/>
            </div>
            <select className='select mt1' onChange={(e) => changeType(e.target.value)}>
                <option value="ali">Alidoorf</option>
                <option value="prime">Primeloft</option>
                <option value="mebel">Mebel</option>
            </select>
        </div>
    )
}

export default AccessPage
