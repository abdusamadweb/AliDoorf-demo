import React, {useEffect, useState} from 'react'
import {getData, getPostDataUser} from "../../../api/apiResp"
import {API_TEST} from "../../../api/apiConfig"
import door1 from '../../../assets/images/door1.png'
import {Link, useNavigate, useParams} from "react-router-dom"

const CatalogItemId = ({ lang }) => {


    const { id } = useParams()

    const navigate = useNavigate()


    const [result, setResult] = useState([])
    const arr = [
        'ali_about_hero_tit',
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
            const res = await getData(`/api/alidoorf/v1/category?parent-id=${id}&page=0&size=50`)
            setList(res)
        }
        get()
    }, [])

    // get data
    const [product, setProduct] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/product?categoryId=${id}&page=0&size=50`)
            setProduct(res)
        }
        get()
    }, [])


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + list?.data?.[0]?.attachmentId


    return (
        <div className='catalog-inner' style={{backgroundImage: `url(${img})`}}>
            <div className="page">
                <div className="container">
                    <h1 className="catalog-inner__title">{ list?.data?.[0]?.name || '...' }</h1>
                </div>
            </div>
            <div className="catalog-inner__wrapper py3">
                <div className="container">
                    <div className="titles">
                        <h2 className='title'>{ list?.data?.[0]?.name || '...' }</h2>
                    </div>
                    <ul className='list'>
                        {
                            product?.data?.map(i => (
                                <li className="item">
                                    <Link className='item__link' to={`${i.id}`}>
                                        <img className='img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId} alt="img"/>
                                        <span className='txt'>{ i.title }</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='btn' onClick={() => navigate(-1)}>↑</button>
                </div>
            </div>
        </div>
    )
}

export default CatalogItemId
