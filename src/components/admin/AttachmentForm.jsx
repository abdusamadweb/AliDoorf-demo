import React from 'react'
import {postAttachment, putData} from "../../api/apiResp";

const AttachmentForm = ({
    value,
    valueRu,
    valueEn,
    valueUz,
    setValueRu,
    setValueEn,
    setValueUz,
    formTitle,
    setEffect,
    one
}) => {


    const sendFile1 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setValueRu(res.data[0].id)
    }
    const sendFile2 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setValueEn(res.data[0].id)
    }
    const sendFile3 = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setValueUz(res.data[0].id)
    }


    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: value,
            valueRu,
            valueEn,
            valueUz
        }
        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='content__form' onSubmit={postData}>
            {
                !one ?
                    <div>
                        <div className='content__subtitle fz22 fw500 mb1'>{ formTitle }:</div>
                        <label>
                            <span className='txt'>Ru</span>
                            <input
                                className='admin-inp'
                                type="file"
                                placeholder='Img ru . . .'
                                onChange={(e) => sendFile1(e.target.files)}
                            />
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            <input
                                className='admin-inp'
                                type="file"
                                placeholder='Img ru . . .'
                                onChange={(e) => sendFile2(e.target.files)}
                            />
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            <input
                                className='admin-inp'
                                type="file"
                                placeholder='Img ru . . .'
                                onChange={(e) => sendFile3(e.target.files)}
                            />
                        </label>
                    </div>
                    :
                    <div>
                        <div className='content__subtitle fz20 fw500 mb1'>{ formTitle }:</div>
                        <label>
                            <input
                                className='admin-inp mb1'
                                type="file"
                                placeholder='Img . . .'
                                onChange={(e) => sendFile1(e.target.files)}
                            />
                        </label>
                    </div>
            }
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default AttachmentForm
