import React, {useRef, useState} from 'react'
import {deleteData, putData} from "../../../../api/apiResp";
import {toast} from "react-hot-toast";

const MenuLinkItem = ({ i, setEffect }) => {

    const [modal, setModal] = useState(false)


    const link = useRef()
    const titRu = useRef()
    const titEn = useRef()
    const titUz = useRef()
    const index = useRef()

    const postData = (e) => {
        e.preventDefault()

        const item = {
            nameRu: titRu.current?.value,
            nameEn: titEn.current?.value,
            nameUz: titUz.current?.value,
            type: i.type,
            link: link.current?.value,
            orderIndex: index.current?.value
        }
        const get = async () => {
            const res = await putData(`/api/alidoorf/v1/menu/${i.id}`, item)
            if (res.success) {
                setEffect(prev => !prev)
                setTimeout(() => {setModal(false)}, 1000)
            }
        }
        get()
    }


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/menu/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
    }


    return (
        <li className='item'>
            <div className='row no-wrap between mt1 mb1'>
                <span className='fw500 mr1'>Index:</span>
                <span className='item__txt'>{ i.orderIndex }</span>
            </div>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Link:</span>
                <span className='item__txt'>{ i.link }</span>
            </div>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Title ru:</span>
                <span className='item__txt'>{ i.nameRu }</span>
            </div>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Title en:</span>
                <span className='item__txt'>{ i.nameEn }</span>
            </div>
            <div className='row no-wrap between'>
                <span className='fw500 mr1'>Title uz:</span>
                <span className='item__txt'>{ i.nameUz }</span>
            </div>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del' onClick={removeData}>Delete</button>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form" onSubmit={postData}>
                            <span className='title d-block center fw500 fz22 mb2'>Edit</span>
                            <div>
                                <span className='title fw500 fz18 mb1'>Link:</span>
                                <label>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Link . . .'
                                        defaultValue={i.link}
                                        ref={link}
                                    />
                                </label>
                            </div>
                            <div>
                                <span className='title fw500 fz18 mb1'>Title:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        defaultValue={i.nameRu}
                                        ref={titRu}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        defaultValue={i.nameEn}
                                        ref={titEn}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        defaultValue={i.nameUz}
                                        ref={titUz}
                                    />
                                </label>
                            </div>
                            <label>
                                <span className='title fw500 fz18 mb1'>Index:</span>
                                <input
                                    className='admin-inp'
                                    type="number"
                                    placeholder='Ex: 1'
                                    defaultValue={i.orderIndex}
                                    ref={index}
                                />
                            </label>
                            <button className='admin-btn'>Submit</button>
                        </form>
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default MenuLinkItem
