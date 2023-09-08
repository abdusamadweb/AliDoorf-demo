import React, {useEffect, useState} from 'react'
import {getPostData, postAttachment, putData} from "../../api/apiResp";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const AdminForm = ({
    i,
    value,
    valueRu,
    valueEn,
    valueUz,
    setValueRu,
    setValueEn,
    setValueUz,
    formTitle,
    setEffect,
    textarea,
    one,
    img,
    setModal,
    edit,
    catalog,
    link,
    setLink,
    type,
    setType
}) => {


    const [attachmentId, setAttachmentId] = useState(null)
    const sendFile = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId(res.data[0].id)
    }


    useEffect(() => {
        if (edit && img) {
            setValueRu(i?.nameRu || '...')
            setValueEn(i?.nameEn || '...')
            setValueUz(i?.nameUz || '...')
            setAttachmentId(i?.attachmentId || null)
        }
        if (catalog && edit) {
            setLink(i?.link || '/')
        }
    }, [])


    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: value,
            valueRu,
            valueEn,
            valueUz,
            attachmentId
        }
        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }

    const itemAbout = {
        type: type,
        nameRu: valueRu,
        nameEn: valueEn,
        nameUz: valueUz,
        attachmentId: attachmentId,
        orderIndex: 1,
    }
    const itemCatalog = {
        type: type,
        nameRu: valueRu,
        nameEn: valueEn,
        nameUz: valueUz,
        link: link,
        attachmentId: attachmentId,
        orderIndex: 1
    }
    const postAboutData = (e) => {
        e.preventDefault()

        const get = async () => {
            const res = await getPostData(!catalog ? '/api/alidoorf/v1/about' : '/api/alidoorf/v1/category', catalog ? itemCatalog : itemAbout)
            if (res.success) {
                toast.success('Success !')
                setEffect(prev => !prev)
                setTimeout(() => setModal(false), 1000)
            }
        }
        get()
    }
    const editData = (e) => {
        e.preventDefault()
        putData(!catalog ? `/api/alidoorf/v1/about/${i.id}` : `/api/alidoorf/v1/category/${i.id}`, catalog ? itemCatalog : itemAbout)
        setTimeout(() => {
            setModal(false)
            setEffect(prev => !prev)
        }, 1000)
    }


    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='form' onSubmit={img && edit ? editData : img ? postAboutData : postData}>
            {
                img ?
                    <span className='title d-block center fw500 fz22 mb2'>{ edit ? 'Edit' : 'Add' }</span>
                    : one === 'p' ?
                    <></>
                    : (type || setType) &&
                    <div className='row between'>
                        <span className='title fw500 fz18 mb1'>{ formTitle }:</span>
                        <select className='select mb1' onChange={(e) => changeType(e.target.value)}>
                            <option value="ali">Alidoorf</option>
                            <option value="prime">Primeloft</option>
                            <option value="mebel">Mebel</option>
                        </select>
                    </div>
            }
            {
                one === false ?
                    <div>
                        {
                            img &&
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
                        }
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
                    : one === true ?
                        <label>
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
                        : one === 'p' &&
                            <label>
                                <input
                                    className='admin-inp'
                                    type="text"
                                    placeholder='Parallax . . .'
                                    value={valueRu}
                                    onChange={(e) => setValueRu(e.target.value)}
                                />
                            </label>
            }
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default AdminForm
