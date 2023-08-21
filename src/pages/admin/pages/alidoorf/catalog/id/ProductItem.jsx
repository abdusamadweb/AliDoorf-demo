import React, {useRef, useState} from 'react'
import {useParams} from "react-router-dom";
import {API_TEST} from "../../../../../../api/apiConfig";
import {deleteData, postAttachment, putData} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";

const ProductItem = ({ i, setEffect }) => {


    const { id } = useParams()


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState(i.titleRu)
    const [titEn, setTitEn] = useState(i.titleEn)
    const [titUz, setTitUz] = useState(i.titleEn)

    const [descRu, setDescRu] = useState(i.descRu)
    const [descEn, setDescEn] = useState(i.descEn)
    const [descUz, setDescUz] = useState(i.descUz)

    const [attachmentId, setAttachmentId] = useState(i.attachmentId)
    const [attachmentId2, setAttachmentId2] = useState(i.files[1] || null)
    const [attachmentId3, setAttachmentId3] = useState(i.files[2] || null)
    const [attachmentId4, setAttachmentId4] = useState(i.files[3] || null)

    const [key, setKey] = useState(i.details?.[0]?.key)
    const [valueRu, setValueRu] = useState(i.details?.[0]?.valueRu)
    const [valueEn, setValueEn] = useState(i.details?.[0]?.valueEn)
    const [valueUz, setValueUz] = useState(i.details?.[0]?.valueUz)


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


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/product/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
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
            setCount(prev => prev+1)

            toast.success('Added !')

            setKey('')
            setValueRu('')
            setValueEn('')
            setValueUz('')
        } else {
            toast.error('Input must not be empty !')
        }
    }


    const editData = (e) => {
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
            details: details?.length > 0 ? details : i.details
        }
        putData(`/api/alidoorf/v1/product/${i.id}`, item)
        setTimeout(() => {
            setModal(false)
            setEffect(prev => !prev)
        }, 1000)
    }


    return (
        <li className='item'>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del' onClick={removeData}>Delete</button>
            </div>
            <div className="imgs grid mb1">
                {
                    i?.files?.map(file => (
                        <img
                            className='img'
                            src={API_TEST + 'api/alidoorf/v1/attachment/get/' + file}
                            alt="img"
                            key={file}
                        />
                    ))
                }
            </div>
            <div>
                <div className='mb1'>
                    <span className='title fw500 fz18'>Title:</span>
                    <div className='row between align-center'>
                        <span>Ru</span>
                        <span>{ i.titleRu }</span>
                    </div>
                    <div className='row between align-center'>
                        <span>En</span>
                        <span>{ i.titleEn }</span>
                    </div>
                    <div className='row between align-center'>
                        <span>Uz</span>
                        <span>{ i.titleUz }</span>
                    </div>
                </div>
                <div className='mb1'>
                    <span className='title fw500 fz18'>Description:</span>
                    <div className='row between align-center'>
                        <span>Ru</span>
                        <span>{ i.descRu }</span>
                    </div>
                    <div className='row between align-center'>
                        <span>En</span>
                        <span>{ i.descEn }</span>
                    </div>
                    <div className='row between align-center'>
                        <span>Uz</span>
                        <span>{ i.descUz }</span>
                    </div>
                </div>
                <div className='details mb1'>
                    <span className='title fw500 fz18'>Details:</span>
                    <div>
                        {
                            i?.details?.map((item, index) => (
                                <div className='title row between' key={index}>
                                    <span>{ item.key } :</span>
                                    <div>
                                        <div>{ item.valueRu }</div>
                                        <div>{ item.valueEn }</div>
                                        <div>{ item.valueUz }</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className='form' onSubmit={editData}>
                            <span className='title d-block center fw500 fz22' style={{marginBottom: '2rem'}}>Add Product</span>
                            <div className='row no-wrap between g1'>
                                <div>
                                    <label>
                                        <div className='content__subtitle fz20 fw500 mb1'>Main img:</div>
                                        <input
                                            className='admin-inp mb1'
                                            type="file"
                                            placeholder='Img . . .'
                                            onChange={(e) => sendFile(e.target.files)}
                                        />
                                    </label>
                                    <label>
                                        <div className='content__subtitle fz18 fw500 mb1'>Img 2: (optional)</div>
                                        <input
                                            className='admin-inp mb1'
                                            type="file"
                                            placeholder='Img . . .'
                                            onChange={(e) => sendFile2(e.target.files)}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <div className='content__subtitle fz18 fw500 mb1'>Img 3: (optional)</div>
                                        <input
                                            className='admin-inp mb1'
                                            type="file"
                                            placeholder='Img . . .'
                                            onChange={(e) => sendFile3(e.target.files)}
                                        />
                                    </label>
                                    <label>
                                        <div className='content__subtitle fz18 fw500 mb1'>Img 4: (optional)</div>
                                        <input
                                            className='admin-inp mb1'
                                            type="file"
                                            placeholder='Img . . .'
                                            onChange={(e) => sendFile4(e.target.files)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className='row no-wrap between g1'>
                                <div className='w100'>
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
                                <div className='w100'>
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
                            </div>
                            <div>
                                <div className='content__subtitle fz22 fw500 mb2'>Details:</div>
                                <div className='row no-wrap between g1'>
                                    <div className='w100'>
                                        <div className='content__subtitle fz20 fw500 mb1'>Text { count }:</div>
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
                                    <div className='w100'>
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
                                </div>
                                <div className='mb2' style={{textAlign: 'end'}}>
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
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default ProductItem
