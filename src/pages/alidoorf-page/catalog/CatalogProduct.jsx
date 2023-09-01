import React, {useEffect, useState} from 'react'
import {Link, useHref, useNavigate, useParams} from "react-router-dom"
import {$resp, getData, getPostDataUser} from "../../../api/apiResp";
import {API_TEST} from "../../../api/apiConfig";
import {toast} from "react-hot-toast";

const CatalogProduct = ({ lang }) => {


    const { id } = useParams()

    const navigate = useNavigate()


    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/product/${id}?page=0&size=50`)
            setResult(res)
        }
        get()
    }, [id])


    const url = useHref()

    const currentURL = window.location.href
    const pattern = /\/alidoorf\/catalog\/\d+\/(\d+)\/\d+/
    const matches = currentURL.match(pattern)

    // get recommendations
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/product?categoryId=${matches?.[1]}&page=0&size=50`, lang)
            setList(res)
        }
        get()
    }, [lang])


    const [activeImg, setActiveImg] = useState(0)

    const img = (attachmentId) => {
        return API_TEST + 'api/alidoorf/v1/attachment/get/' + attachmentId
    }


    // get content
    const [content, setContent] = useState([])
    const arr = [
        'chat_us_btn',

        'product_form__desc',

        'product_warn'
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setContent(res)
        }
        get()
    }, [lang])
    
    
    // forms
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const postForm = (e) => {
        e.preventDefault()

        const item = {
            name: name,
            phoneNumber: number,
            address: null,
            email: null,
            description: `Product - ${result?.data?.title}`
        }
        $resp
            .post('/api/alidoorf/v1/order', item)
            .then(() => toast.success('Ваша заявка принята !'))
            .catch(err => {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            })
    }


    return (
        <div className='catalog catalog-id page bg-cl pt2 pb3'>
            <div className="container">
                <div className='mb3'>
                    <div className='catalog-id__title'>{ result?.data?.title || '...' }</div>
                    <div>
                        <button className='btn' onClick={() => navigate(-1)}>←</button>
                        <ul className='title-list'>
                            {
                                list?.data?.map(i => (
                                    <li className="item">
                                        <Link
                                            className='item__link'
                                            to={url?.replace(/\/\d+$/, `/${i.id}`)}
                                        >
                                            { i.title }
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
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
                            <form className='form' onSubmit={postForm}>
                                <span className='form__txt'>{ content?.data?.product_form__desc || '...' }</span>
                                <div className='diver grid'>
                                    <input
                                        className='form__inp'
                                        type="text"
                                        placeholder='Name'
                                        required={true}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        className='form__inp'
                                        type="tel"
                                        placeholder='+998'
                                        required={true}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>
                                <button className='form__btn'>{ content?.data?.chat_us_btn || '...' }</button>
                            </form>
                        </div>
                    </div>
                    <p className='warn-desc'>{ content?.data?.product_warn || '...' }</p>
                </div>
            </div>
        </div>
    )
}

export default CatalogProduct
