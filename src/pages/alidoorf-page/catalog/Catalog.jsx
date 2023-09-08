import './Catalog.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {getData, getPostDataUser} from "../../../api/apiResp";
import {API_TEST} from "../../../api/apiConfig";

const Catalog = ({ lang, type }) => {


    useEffect(() => {
        const title = lang === 'uz' ? 'Katalog' : lang === 'ru' ? 'Каталог' : 'Catalog'
        document.title = `${title} - ALIDOORF`
        return () => {
            document.title = 'ALIDOORF'
        }
    }, [lang])


    const [result, setResult] = useState([])
    const arr = [
        `${type}_catalog_hero_tit`
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
            const res = await getData(`/api/alidoorf/v1/category?page=0&size=50&type=${type}`, lang)
            setList(res)
        }
        get()
    }, [lang])


    return (
        <div className='catalog page bg-cl pt2 pb3'>
            <div className="container">
                <div className="catalog__inner">
                    <h1 className="catalog__title">{ result.data?.[`${type}_catalog_hero_tit`] || '...' }</h1>
                    <ul className='catalog__list grid'>
                        {
                            list?.data?.map(i => (
                                <li className="item" key={i.id}>
                                    <Link className='item__link' to={`${i.id}`}>
                                        <img className='img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null} alt="img"/>
                                        <span className='txt'>{ i.name }</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Catalog
