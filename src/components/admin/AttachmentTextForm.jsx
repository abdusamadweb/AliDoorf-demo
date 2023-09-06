import React, {useEffect, useState} from 'react'
import {getPostData, postAttachment, putData} from "../../api/apiResp";
import {toast} from "react-hot-toast";

const AttachmentTextForm = ({
    i,
    valueRu,
    valueEn,
    valueUz,
    setValueRu,
    setValueEn,
    setValueUz,
    descRu,
    descEn,
    descUz,
    setDescRu,
    setDescEn,
    setDescUz,
    date,
    setDate,
    formTitle,
    setEffect,
    setModal,
    textarea,
    index,
    news,
    edit,
    type
}) => {


    const [attachmentId, setAttachmentId] = useState(null)
    const sendFile = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId(res.data[0].id)
    }


    useEffect(() => {
        if (edit) {
            setValueRu(i?.titleRu || '...')
            setValueEn(i?.titleEn || '...')
            setValueUz(i?.titleUz || '...')

            if (news) {
                setDescRu(i?.descriptionRu || '...')
                setDescEn(i?.descriptionEn || '...')
                setDescUz(i?.descriptionUz || '...')
                setDate(new Date(i?.date).toLocaleDateString() || date)
            }

            setAttachmentId(i?.attachmentId || null)
        }
    }, [])


    const item = {
        type: type,
        titleRu: valueRu,
        titleEn: valueEn,
        titleUz: valueUz,
        orderIndex: index,
        attachmentId: attachmentId
    }
    const newsItem = {
        primeloft: type,
        type: type,
        titleRu: valueRu,
        titleEn: valueEn,
        titleUz: valueUz,
        descriptionRu: descRu,
        descriptionEn: descEn,
        descriptionUz: descUz,
        orderIndex: index,
        attachmentId: attachmentId,
        date: new Date(date).getTime()
    }
    const postData = async (e) => {
        e.preventDefault()
        const res = await getPostData(news ? '/api/alidoorf/v1/news' : '/api/alidoorf/v1/technology', news ? newsItem : item)
        if (res.success) {
            toast.success('Success !')
            setEffect(prev => !prev)
            setTimeout(() => setModal(false), 1000)
        }
    }
    const editData = (e) => {
        e.preventDefault()
        putData(news ? `/api/alidoorf/v1/news/${i.id}` : `/api/alidoorf/v1/technology/${i.id}`, news ? newsItem : item)
        setTimeout(() => {
            setModal(false)
            setEffect(prev => !prev)
        }, 1000)
    }


    return (
        <form className='form' onSubmit={edit ? editData : postData}>
            <span className='title d-block center fw500 fz22 mb1'>{edit ? 'Edit' : 'Add'}</span>
            <div>
                <div className='content__subtitle fz20 fw500 mb1'>Img:</div>
                <label>
                    <input
                        className='admin-inp mb1'
                        type="file"
                        placeholder='Img . . .'
                        onChange={(e) => sendFile(e.target.files)}
                    />
                </label>
            </div>
            {
                !news ?
                    <div>
                        <div className='content__subtitle fz20 fw500 mb1'>{formTitle}:</div>
                        <label>
                            <span className='txt'>Ru</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                            }
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} en . . .`}
                                        value={valueEn}
                                        onChange={(e) => setValueEn(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} en . . .`}
                                        value={valueEn}
                                        onChange={(e) => setValueEn(e.target.value)}
                                    />
                            }
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} uz . . .`}
                                        value={valueUz}
                                        onChange={(e) => setValueUz(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} uz . . .`}
                                        value={valueUz}
                                        onChange={(e) => setValueUz(e.target.value)}
                                    />
                            }
                        </label>
                    </div>
                    :
                    <div>
                        <label>
                            <div className='row align-center'>
                                <span className='title d-block fw500 fz18 mb1 mr1'>Date:</span>
                                <span className='title d-block fw500 fz16'>{ new Date(i?.date).toLocaleDateString() }</span>
                            </div>
                            <input
                                className='admin-inp'
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <div className='row no-wrap g1'>
                            <div className='w50'>
                                <span className='title fw500 fz18 mb1'>Title:</span>
                                <label>
                                    <span className='txt'>Ru</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} en . . .`}
                                        value={valueEn}
                                        onChange={(e) => setValueEn(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} uz . . .`}
                                        value={valueUz}
                                        onChange={(e) => setValueUz(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className='w50'>
                                <span className='title fw500 fz18 mb1'>Description:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <textarea
                                        className='admin-inp'
                                        placeholder='Text . . .'
                                        value={descRu}
                                        onChange={(e) => setDescRu(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <textarea
                                        className='admin-inp'
                                        placeholder='Text . . .'
                                        value={descEn}
                                        onChange={(e) => setDescEn(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <textarea
                                        className='admin-inp'
                                        style={{marginBottom: 0}}
                                        placeholder='Text . . .'
                                        value={descUz}
                                        onChange={(e) => setDescUz(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
            }
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default AttachmentTextForm
