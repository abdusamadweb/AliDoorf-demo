import './AboutFacts.scss'
import React, {useEffect, useState} from 'react'
import {getData, getPostDataUser} from "../../../../api/apiResp";
import {API_TEST} from "../../../../api/apiConfig";

const AboutFacts = ({ lang, type }) => {


    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_facts_sub`,
        `${type}_about_facts_tit`,
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang, type])


    // get data
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/about?type=${type}`, lang)
            setList(res)
        }
        get()
    }, [lang, type])


    return (
        <div className='facts page bg-cl'>
            <div className="container">
                <div className="facts__inner">
                    <div className="titles">
                        <span className="subtitle">{ result.data?.[`${type}_about_facts_sub`] || '...' }</span>
                        <h2 className="title">{ result.data?.[`${type}_about_facts_tit`] || '...' }</h2>
                    </div>
                    <ul className="facts__body grid">
                        {
                            list?.data?.map(i => (
                                <li className='item' key={i.id}>
                                    <img className='item__img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null} alt="img"/>
                                    <h3 className="item__txt">{ i.name }</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutFacts
