import './Instagram.scss'
import React, {useEffect, useState} from 'react'
import {getPostDataUser} from "../../../../api/apiResp";

const Instagram = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'instagram',
        'instagram_posts',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    return (
        <div className='insta page bg-cl pt2 pb3'>
            <div className="container">
                <div className="insta__inner">
                    <div className="titles">
                        <span className="subtitle">{ result?.data?.instagram }</span>
                        <h2 className="title">{ result?.data?.instagram_posts }</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram
