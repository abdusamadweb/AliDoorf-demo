import './NewsSection.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {getData, getPostDataUser} from "../../../../api/apiResp";
import {API_TEST} from "../../../../api/apiConfig";

const NewsSection = ({ lang, type }) => {


    const [result, setResult] = useState([])
    const arr = [
        `${type}_news_news_sub`,
        `${type}_news_news_tit`,
        `${type}_news_news_btn`,
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    // get data
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/news?page=0&size=20&type=${type}`, lang)
            setList(res)
        }
        get()
    }, [lang])


    return (
        <div className='news page bg-cl pt2 pb3'>
            <div className="container">
                <div className="titles">
                    <span className="subtitle">{ result.data?.ali_news_news_sub || '...' }</span>
                    <h2 className="title">{ result.data?.ali_news_news_tit || '...' }</h2>
                </div>
                <ul className='news__list grid'>
                    {
                        list?.data?.map(i => (
                            <li className='item' key={i.id}>
                                <img className='item__img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null} alt="img"/>
                                <span className="item__time">{ new Date(i.date).toLocaleDateString() }</span>
                                <h4 className="item__title">{ i.title }</h4>
                                <p className='item__desc'>{ i.description }</p>
                                <Link className='item__btn' to={`/alidoorf/news/${i.id}`}>{ result.data?.ali_news_news_btn || '...' }</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NewsSection
