import './NewsHero.scss'
import React, {useEffect, useState} from 'react'
import {getPostDataUser} from "../../../../api/apiResp";
import {API_TEST} from "../../../../api/apiConfig";
import {useHref, useLocation} from "react-router-dom";

const NewsHero = ({ lang, type }) => {


    const href = useHref()

    const [result, setResult] = useState([])
    const arr = [
        `${type}_news_hero_tit`,
        `${type}_news_hero_img`
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang, href])

    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + result?.data?.[`${type}_news_hero_img`]


    return (
        <div className='news-hero page' style={{backgroundImage: `url(${img})`}}>
            <div className="bg-shadow"/>
            <div className="container">
                <h1 className='news-hero__title'>{ result.data?.[`${type}_news_hero_tit`] || '...' }</h1>
            </div>
        </div>
    )
}

export default NewsHero
