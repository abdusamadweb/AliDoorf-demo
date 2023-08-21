import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getData, getPostData, postAttachment} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import AlidoorfCatalogIdItem from "./AlidoorfCatalogIdItem";

const AlidoorfCatalogId = () => {


    const { id } = useParams()


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/category?parent-id=${id}&page=0&size=50`)
            setResult(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    const [attachmentId, setAttachmentId] = useState(null)


    const sendFile = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId(res.data[0].id)
    }


    const postData = (e) => {
        e.preventDefault()

        const item = {
            nameRu: titRu,
            nameEn: titEn,
            nameUz: titUz,
            attachmentId: attachmentId,
            categoryId: id,
            orderIndex: 1
        }
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/category', item)
            if (res.success) {
                toast.success('Success !')
                setEffect(prev => !prev)
                setTimeout(() => setModal(false), 1000)
            }
        }
        get()
    }


    return (
        <div className='ali-catalog catalog admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb2'>Catalog > { id }</div>
            <ul className='catalog__list grid'>
                <li className="item item__link plus grid grid-center">
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                {
                    result?.data?.map(i => (
                        <AlidoorfCatalogIdItem
                            i={i}
                            id={id}
                            setEffect={setEffect}
                            key={i.id}
                        />
                    ))
                }
            </ul>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className='form' onSubmit={postData}>
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
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
                            <div>
                                <span className='title fw500 fz18 mb1'>Title:</span>
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
                            <button className='admin-btn'>Submit</button>
                        </form>
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default AlidoorfCatalogId
