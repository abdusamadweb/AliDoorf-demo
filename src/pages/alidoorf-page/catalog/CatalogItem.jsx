import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {getData, getPostDataUser} from "../../../api/apiResp";
import {API_TEST} from "../../../api/apiConfig";

const CatalogItem = ({ lang }) => {


    const { id } = useParams()


    const [result, setResult] = useState([])
    const arr = [
        'header_route_catalog'
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    // get data
    const [list1, setList1] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/category?page=0&size=50`, lang)
            setList1(res?.data?.filter(i => i.id == id && i))
        }
        get()
    }, [lang])

    // get data
    const [list2, setList2] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/category?parent-id=${id}&page=0&size=50`, lang)
            setList2(res)
        }
        get()
    }, [lang])


    return (
        <div className='catalog catalog-item page bg-cl pt2 pb3'>
            <div className="container">
                <div className="catalog__inner">
                    <div>
                        <span className='catalog__subtitle'>{ result.data?.header_route_catalog || '...' }</span>
                        <h1 className="catalog__title">{ list1?.[0]?.name || '...' }</h1>
                    </div>
                    <ul className='catalog__list grid'>
                        {
                            list2?.data?.map(item => (
                                <li className="item" key={item.id}>
                                    <Link className='item__link' to={`${id}`}>
                                        <img className='img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + item.attachmentId || null} alt="img"/>
                                        <span className='txt'>{ item.name }</span>
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

export default CatalogItem
