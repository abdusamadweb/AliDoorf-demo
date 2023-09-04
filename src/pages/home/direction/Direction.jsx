import './Direction.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import {getPostDataUser} from "../../../api/apiResp";
import {API_TEST} from "../../../api/apiConfig";

const Direction = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'main_direction_tit',
        'main_direction_ali_desc',
        'main_direction_ali_space',
        'main_direction_ali_img',

        'main_direction_prime_desc',
        'main_direction_prime_space',
        'main_direction_prime_img',

        'main_direction_mebel_desc',
        'main_direction_mebel_space',
        'main_direction_mebel_img',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])

    const img1 = API_TEST + 'api/alidoorf/v1/attachment/get/' + result.data?.main_direction_ali_img || null
    const img2 = API_TEST + 'api/alidoorf/v1/attachment/get/' + result.data?.main_direction_prime_img || null
    const img3 = API_TEST + 'api/alidoorf/v1/attachment/get/' + result.data?.main_direction_mebel_img || null


    return (
        <div className='direction page bg-cl'>
            <div className="container">
                <div className="direction__inner">
                    <div className="direction__titles mb2">
                        <span className='subtitle mb1'>ooo forever quality</span>
                        <h2 className='title'>{ result.data?.main_direction_tit || '...' }</h2>
                    </div>
                    <div className="direction__content row no-wrap">
                        <Link className='item' to='/alidoorf'>
                            <img className='item__img' src={img1} alt="bg"/>
                            <h1 className='item__title center-absolute center'>{ result.data?.main_direction_ali_space || '...' }</h1>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>alidoorf</h3>
                                <p className='desc'>{ result.data?.main_direction_ali_desc || '...' }</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                        <Link className='item' to='/primeloft'>
                            <img className='item__img' src={img2} alt="bg"/>
                            <h1 className='item__title center-absolute center'>{ result.data?.main_direction_prime_space || '...' }</h1>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>primeloft</h3>
                                <p className='desc'>{ result.data?.main_direction_prime_desc || '...' }</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                        <Link className='item' to='/mebel'>
                            <img className='item__img' src={img3} alt="bg"/>
                            <h1 className='item__title center-absolute center'>{ result.data?.main_direction_mebel_space || '...' }</h1>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>mebel</h3>
                                <p className='desc'>{ result.data?.main_direction_mebel_desc || '...' }</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Direction
