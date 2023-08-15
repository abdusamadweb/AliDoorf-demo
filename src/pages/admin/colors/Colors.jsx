import './Colors.scss'
import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../api/apiResp";
import SecondaryColors from "./other/SecondaryColors";

const Colors = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'color_primary_light',
        'color_primary_dark',
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [color, setColor] = useState('#')
    const [color2, setColor2] = useState('#')

    useEffect(() => {
        setColor(result?.data?.color_primary_light)
        setColor2(result?.data?.color_primary_dark)
    }, [result, effect])


    const postColor = (e) => {
        const item = {
            key: 'color_primary_light',
            valueRu: color,
            valueEn: color,
            valueUz: color,
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postColor2 = (e) => {
        const item = {
            key: 'color_primary_dark',
            valueRu: color2,
            valueEn: color2,
            valueUz: color2,
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postData = (e) => {
        e.preventDefault()

        postColor()
        postColor2()
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div className='colors admin-main admin-page'>
            <div className='colors__title fw500 fz24 mb3'>Colors page</div>
            <form className='form' onSubmit={postData}>
                <div className='colors__title fw500 fz20 mb1'>Primary color</div>
                <label>
                    <span className='txt'>Light:</span>
                    <input
                        className='admin-inp'
                        type="text"
                        placeholder='# . . .'
                        defaultValue='#'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
                <label>
                    <span className='txt'>Dark:</span>
                    <input
                        className='admin-inp'
                        type="text"
                        placeholder='# . . .'
                        defaultValue='#'
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                    />
                </label>
                <button className='admin-btn'>Submit</button>
            </form>

            <SecondaryColors />
        </div>
    )
}

export default Colors
