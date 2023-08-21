import React, {useState} from 'react'
import {API_TEST} from "../../../../../../api/apiConfig";
import {deleteData, postAttachment, putData} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import {Link} from "react-router-dom";

const AlidoorfCatalogIdItem = ({ i, id, setEffect }) => {


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState(i.nameRu)
    const [titEn, setTitEn] = useState(i.nameEn)
    const [titUz, setTitUz] = useState(i.nameUz)

    const [attachmentId, setAttachmentId] = useState(i.attachmentId)


    const sendFile = async (files) => {
        const res = await postAttachment('/api/alidoorf/v1/attachment/upload', files)
        setAttachmentId(res.data[0].id)
    }


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/category/remove/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
    }

    const editData = (e) => {
        e.preventDefault()

        const item = {
            nameRu: titRu,
            nameEn: titEn,
            nameUz: titUz,
            attachmentId: attachmentId,
            orderIndex: 1,
            categoryId: id
        }
        putData(`/api/alidoorf/v1/category/${i.id}`, item)
        setTimeout(() => {
            setModal(false)
            setEffect(prev => !prev)
        }, 1000)
    }


    return (
        <li className="item">
            <Link to={`${i.categoryId}`} style={{color: '#111'}}>
                <img className='img mb1' src={img} alt="img" style={{height: '200px', width: '100%'}}/>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title ru:</span>
                    <span className='txts'>{ i.nameRu }</span>
                </div>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title en:</span>
                    <span className='txts'>{ i.nameEn }</span>
                </div>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title uz:</span>
                    <span className='txts'>{ i.nameUz }</span>
                </div>
            </Link>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del' onClick={removeData}>Delete</button>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className='form' onSubmit={editData}>
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
        </li>
    )
}

export default AlidoorfCatalogIdItem
