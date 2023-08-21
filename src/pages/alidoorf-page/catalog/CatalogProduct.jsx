import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {getData} from "../../../api/apiResp";
import {API_TEST} from "../../../api/apiConfig";

const CatalogProduct = ({ lang }) => {


    const { id } = useParams()


    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/product/${id}?page=0&size=50`)
            setResult(res)
        }
        get()
    }, [])


    // get recommendations
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/category?parent-id=${id}&page=0&size=50`, lang)
            setList(res)
        }
        get()
    }, [lang])


    const [activeImg, setActiveImg] = useState(0)

    const img = (attachmentId) => {
        return API_TEST + 'api/alidoorf/v1/attachment/get/' + attachmentId
    }


    return (
        <div className='catalog catalog-id page bg-cl pt2 pb3'>
            <div className="container">
                <div className='mb3'>
                    <div className='catalog-id__title'>{ result?.data?.title || '...' }</div>
                    <ul className='title-list'>
                        {
                            list?.data?.map(i => (
                                <li className="item">
                                    <Link className='item__link' to={`/alidoorf/catalog/${i.id}/${i.id}`}>{ i.name }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='content pt2'>
                    <div className="content__wrapper grid">
                        <div className="images">
                            <img
                                className='img mb1'
                                src={img(result?.data?.files?.[activeImg])}
                                alt="img"
                            />
                            <div className='imgs'>
                                {
                                    result?.data?.files?.map((i, index) => (
                                        <img
                                            className={`imgs__img ${activeImg === index ? 'active' : ''}`}
                                            src={img(i)}
                                            alt="img"
                                            key={index}
                                            onClick={() => setActiveImg(index)}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="descs">
                            <div className="descs__head">
                                <h1 className='title'>{ result?.data?.title || '...' }</h1>
                                <div className='txts pb1'>
                                    {
                                        result?.data?.details?.map(i => (
                                            <div className="row align-center" key={i.id}>
                                                <span className='txt1'>{ i.key }:</span>
                                                <span className='txt2'>{ i.value }:</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <p className='desc mt2'>{ result?.data?.desc || '...' }</p>
                        </div>
                    </div>
                    <p className='warn-desc'>
                        {
                            'Внимание! Изображения дверных полотен и арок, рисунки стёкол, цветовая гамма могут отличаться от реальных в зависимости от цветопередачи и разрешения монитора. Обратите внимание, что при нанесении патины на дверное полотно, декоративное покрытие патиной может немного отличаться от представленного на сайте или в салоне, т.к. это ручной процесс создания эффекта старины.'
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CatalogProduct
