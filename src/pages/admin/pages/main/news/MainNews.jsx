import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../../../api/apiResp";

const MainNews = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = 'publish_news'
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', [arr])
            setResult(res)
        }
        get()
    }, [effect])

    const [type, setType] = useState('ali')


    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }

    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: arr,
            valueRu: type,
            valueEn: type,
            valueUz: type
        }
        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='mt3' onSubmit={postData}>
            <div className='admin-main__title fw500 fz22 mb1'>Main page publish NEWS → { result?.data?.publish_news || 'none' }</div>
            <select className='select admin-inp mb1' onChange={(e) => changeType(e.target.value)}>
                <option value="ali">Alidoorf</option>
                <option value="prime">Primeloft</option>
                <option value="mebel">Mebel</option>
            </select>
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default MainNews
