import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getData, getPostData, postAttachment} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import ProductItem from "./ProductItem";

const Product = () => {


    const {id} = useParams()


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/product?categoryId=${id}&page=0&size=50`)
            setResult(res)
        }
        get()
    }, [effect])

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    const [attachmentId, setAttachmentId] = useState(null)
    const [attachmentId2, setAttachmentId2] = useState(null)
    const [attachmentId3, setAttachmentId3] = useState(null)
    const [attachmentId4, setAttachmentId4] = useState(null)

    const [key, setKey] = useState('')
    const [valueRu, setValueRu] = useState('')
    const [valueEn, setValueEn] = useState('')
    const [valueUz, setValueUz] = useState('')


    const sendFile = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId(res.data[0].id)
    }
    const sendFile2 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId2(res.data[0].id)
    }
    const sendFile3 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId3(res.data[0].id)
    }
    const sendFile4 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId4(res.data[0].id)
    }


    const [count, setCount] = useState(1)
    const [details, setDetails] = useState([])
    const postDetails = () => {
        if (key !== '' && valueRu !== '' && valueEn !== '' && valueUz !== '') {
            const newDetail = {
                key,
                valueRu,
                valueEn,
                valueUz
            }
            setDetails(prev => [...prev, newDetail])
            setCount(prev => prev + 1)

            toast.success('Added !')

            setKey('')
            setValueRu('')
            setValueEn('')
            setValueUz('')
        } else {
            toast.error('Input must not be empty !')
        }
    }


    const postData = (e) => {
        e.preventDefault()

        const item = {
            categoryId: id,
            titleRu: titRu,
            titleEn: titEn,
            titleUz: titUz,
            descRu: descRu,
            descEn: descEn,
            descUz: descUz,
            attachmentId: attachmentId,
            files: [attachmentId, attachmentId2, attachmentId3, attachmentId4],
            details: details
        }
        const get = async () => {
            const res = await getPostData(`/api/alidoorf/v1/product`, item)
            if (res.success) {
                toast.success('Success !')
                setEffect(prev => !prev)
                setDetails([])
            }
        }
        get()
    }


    return (
        <div className='ali-catalog catalog admin-main admin-page'>
            <div>
                <div className='admin-main__title fw500 fz24 mb2'>Product > {id}</div>
                <form className='form' onSubmit={postData}>
                    <span className='title d-block center fw500 fz22 mb2'>Add Product</span>
                    <div>
                        <div className='content__subtitle fz20 fw500 mb1'>Main img:</div>
                        <label>
                            <input
                                className='admin-inp mb1'
                                type="file"
                                placeholder='Img . . .'
                                onChange={(e) => sendFile(e.target.files)}
                            />
                        </label>
                        <div className='content__subtitle fz18 fw500 mb1'>Img 2: (optional)</div>
                        <label>
                            <input
                                className='admin-inp mb1'
                                type="file"
                                placeholder='Img . . .'
                                onChange={(e) => sendFile2(e.target.files)}
                            />
                        </label>
                        <div className='content__subtitle fz18 fw500 mb1'>Img 3: (optional)</div>
                        <label>
                            <input
                                className='admin-inp mb1'
                                type="file"
                                placeholder='Img . . .'
                                onChange={(e) => sendFile3(e.target.files)}
                            />
                        </label>
                        <div className='content__subtitle fz18 fw500 mb1'>Img 4: (optional)</div>
                        <label>
                            <input
                                className='admin-inp mb1'
                                type="file"
                                placeholder='Img . . .'
                                onChange={(e) => sendFile4(e.target.files)}
                            />
                        </label>
                    </div>
                    <div>
                        <span className='title fw500 fz20 mb1'>Title:</span>
                        <label>
                            <span className='txt'>Ru</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder={`Title ru . . .`}
                                value={titRu}
                                onChange={(e) => setTitRu(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder={`Title en . . .`}
                                value={titEn}
                                onChange={(e) => setTitEn(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder={`Title uz . . .`}
                                value={titUz}
                                onChange={(e) => setTitUz(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='mb1'>
                        <span className='title fw500 fz20 mb1'>Description:</span>
                        <label>
                            <span className='txt'>Ru</span>
                            <textarea
                                className='admin-inp'
                                placeholder={`Description ru . . .`}
                                value={descRu}
                                onChange={(e) => setDescRu(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>Ru</span>
                            <textarea
                                className='admin-inp'
                                placeholder={`Description ru . . .`}
                                value={descEn}
                                onChange={(e) => setDescEn(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>Ru</span>
                            <textarea
                                className='admin-inp'
                                placeholder={`Description ru . . .`}
                                value={descUz}
                                onChange={(e) => setDescUz(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <div className='content__subtitle fz22 fw500 mb2'>Details:</div>
                        <div>
                            <div className='content__subtitle fz20 fw500 mb1'>Text {count}:</div>
                            <label>
                                <input
                                    className='admin-inp mb1'
                                    type="text"
                                    placeholder='Key . . .'
                                    value={key}
                                    onChange={(e) => setKey(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <span className='title fw500 fz18 mb1'>Text description:</span>
                            <label>
                                <span className='txt'>Ru</span>
                                <input
                                    className='admin-inp'
                                    type="text"
                                    placeholder={`Title ru . . .`}
                                    value={valueRu}
                                    onChange={(e) => setValueRu(e.target.value)}
                                />
                            </label>
                            <label>
                                <span className='txt'>En</span>
                                <input
                                    className='admin-inp'
                                    type="text"
                                    placeholder={`Title en . . .`}
                                    value={valueEn}
                                    onChange={(e) => setValueEn(e.target.value)}
                                />
                            </label>
                            <label>
                                <span className='txt'>Uz</span>
                                <input
                                    className='admin-inp'
                                    type="text"
                                    placeholder={`Title uz . . .`}
                                    value={valueUz}
                                    onChange={(e) => setValueUz(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='mb2'>
                            <span
                                className='admin-btn no-copy'
                                style={{background: '#ccc', color: '#111', cursor: 'pointer'}}
                                onClick={postDetails}
                            >
                                Next
                            </span>
                        </div>
                    </div>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>
            <div>
                <div className='admin-main__title fw500 fz24 mb2'>Products</div>
                <ul className='list'>
                    {
                        result?.data?.map(i => (
                            <ProductItem i={i} setEffect={setEffect} key={i.id}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Product
