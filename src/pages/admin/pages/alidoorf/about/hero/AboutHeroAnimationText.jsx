import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../../../../api/apiResp";

const AboutHeroAnimationText = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = `${type}_about_hero_animation_txt`
    useEffect(() => {
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/content/data-graph', [arr])
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    useEffect(() => {
        setTitRu(result?.data?.[`${type}_about_hero_animation_txt_ru`])
        setTitEn(result?.data?.[`${type}_about_hero_animation_txt_en`])
        setTitUz(result?.data?.[`${type}_about_hero_animation_txt_uz`])
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


    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }

    return (
        <form className='form' onSubmit={postData}>
            <div className='row between'>
                <span className='title fw500 fz18 mb1'>Animation texts (with ','):</span>
                <select className='select mb1' onChange={(e) => changeType(e.target.value)}>
                    <option value="ali">Alidoorf</option>
                    <option value="prime">Primeloft</option>
                    <option value="mebel">Mebel</option>
                </select>
            </div>
            <label>
                <span className='txt'>Ru</span>
                <textarea
                    className='admin-inp'
                    placeholder='Texts ru . . .'
                    value={titRu}
                    onChange={(e) => setTitRu(e.target.value)}
                />
            </label>
            <label>
                <span className='txt'>En</span>
                <textarea
                    className='admin-inp'
                    placeholder='Texts en . . .'
                    value={titEn}
                    onChange={(e) => setTitEn(e.target.value)}
                />
            </label>
            <label>
                <span className='txt'>Uz</span>
                <textarea
                    className='admin-inp'
                    placeholder='Texts uz . . .'
                    value={titUz}
                    onChange={(e) => setTitUz(e.target.value)}
                />
            </label>
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default AboutHeroAnimationText
