import './NewsId.scss'
import React, {useEffect, useState} from 'react'
import {API_TEST} from "../../../../api/apiConfig";
import {getData} from "../../../../api/apiResp";
import {useParams} from "react-router-dom";

const NewsId = ({ lang }) => {


    const { id } = useParams()


    // get data
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/news?page=0&size=20`, lang)
            setList(res?.data?.find(i => i.id == id))
        }
        get()
    }, [lang])

    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + list?.attachmentId


    return (
        <div className='news-page'>
            <div className='news-id news-hero page' style={{backgroundImage: `url(${img})`}}>
                <div className="container">
                    <h1 className="title news-hero__title">{ list?.title || '...' }</h1>
                </div>
            </div>
            <div className="news-desc page">
                <div className="container">
                    <div className='title'>{ list?.title || '...' }</div>
                    <p className='desc'>{ list?.description }</p>
                </div>
            </div>
        </div>
    )
}

export default NewsId
