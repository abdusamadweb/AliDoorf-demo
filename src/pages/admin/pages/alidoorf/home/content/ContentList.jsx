import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../../../../api/apiResp";

const ContentList = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = 'ali_cont_list'
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', [arr])
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.ali_cont_list_ru)
        setTitEn(result?.data?.ali_cont_list_en)
        setTitUz(result?.data?.ali_cont_list_uz)
    }, [result, effect])


    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: arr,
            valueRu: titRu,
            valueEn: titEn,
            valueUz: titUz
        }
        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='form' onSubmit={postData}>
            <span className='title fw500 fz18 mb1'>Items (each item with ',')::</span>
            <label>
                <span className='txt'>Ru</span>
                <textarea
                    className='admin-inp'
                    placeholder='Item ru . . .'
                    value={titRu}
                    onChange={(e) => setTitRu(e.target.value)}
                />
            </label>
            <label>
                <span className='txt'>En</span>
                <textarea
                    className='admin-inp'
                    placeholder='Item en . . .'
                    value={titEn}
                    onChange={(e) => setTitEn(e.target.value)}
                />
            </label>
            <label>
                <span className='txt'>Uz</span>
                <textarea
                    className='admin-inp'
                    placeholder='Item uz . . .'
                    value={titUz}
                    onChange={(e) => setTitUz(e.target.value)}
                />
            </label>
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default ContentList
