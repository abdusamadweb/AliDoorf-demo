import './NewsHero.scss'
import React, {useEffect, useState} from 'react'
import {getPostDataUser} from "../../../../api/apiResp";
import {API_TEST} from "../../../../api/apiConfig";

const NewsHero = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'ali_news_hero_tit',
        'ali_news_hero_img'
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])

    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + result?.data?.ali_news_hero_img


    return (
        <div className='news-hero page' style={{backgroundImage: `url(${img})`}}>
            <div className="bg-shadow"/>
            <div className="container">
                <h1 className='news-hero__title'>{ result.data?.ali_news_hero_tit || '...' }</h1>
            </div>
        </div>
    )
}

export default NewsHero
