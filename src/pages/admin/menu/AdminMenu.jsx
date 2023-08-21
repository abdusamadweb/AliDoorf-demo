import './AdminMenu.scss'
import React, {useEffect, useState} from 'react'
import MenuBgText from "./bg-txt/MenuBgText";
import MenuLinkItem from "./links/MenuLinkItem";
import {getData, getPostData} from "../../../api/apiResp";
import {toast} from "react-hot-toast";

const AdminMenu = () => {


    const [effect, setEffect] = useState(false)
    const [result1, setResult1] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/menu?type=alidoorf`)
            setResult1(res)
        }
        get()
    }, [effect])

    const [result2, setResult2] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/menu?type=primeloft`)
            setResult2(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    const [link, setLink] = useState('/')
    const [index, setIndex] = useState('1')

    const postData = (e) => {
        e.preventDefault()

        const item = {
            nameRu: titRu,
            nameEn: titEn,
            nameUz: titUz,
            type: modal2 ? 'primeloft' : 'alidoorf',
            link: link,
            orderIndex: index
        }
        const get = async () => {
            const res = await getPostData('/api/alidoorf/v1/menu', item)
            if (res.success) {
                toast.success('Success !')
                setEffect(prev => !prev)
                setTimeout(() => {
                    setModal(false)
                    setModal2(false)
                }, 1000)
            }
        }
        get()
    }


    return (
        <div className='menu admin-main admin-page'>
            <div className='menu__title fw500 fz24 mb3'>Menu</div>
            <MenuBgText />

            <div>
                <div>
                    <div className='menu__title fw500 fz22 mb2'>Alidoorf</div>
                    <ul className='ali__list mb3'>
                        <li className="item item__link plus grid grid-center">
                            <button className='plus__btn' onClick={() => setModal(true)}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        {
                            result1?.data?.map((i, num) => (
                                <MenuLinkItem i={i} setEffect={setEffect} key={num} />
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <div className='menu__title fw500 fz22 mb2'>Primeloft</div>
                    <ul className='ali__list mb3'>
                        <li className="item item__link plus grid grid-center">
                            <button className='plus__btn' onClick={() => {
                                setModal(true)
                                setModal2(true)
                            }}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        {
                            result2?.data?.map((i, num) => (
                                <MenuLinkItem i={i} setEffect={setEffect} key={num} />
                            ))
                        }
                    </ul>
                </div>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form" onSubmit={postData}>
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
                            <div>
                                <span className='title fw500 fz18 mb1'>Link:</span>
                                <label>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Link . . .'
                                        defaultValue='/'
                                        onChange={(e) => setLink(e.target.value)}
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
                                        onChange={(e) => setTitRu(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        onChange={(e) => setTitEn(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        onChange={(e) => setTitUz(e.target.value)}
                                    />
                                </label>
                            </div>
                            <label>
                                <span className='title fw500 fz18 mb1'>Index:</span>
                                <input
                                    className='admin-inp'
                                    type="number"
                                    placeholder='Ex: 1'
                                    onChange={(e) => setIndex(e.target.value)}
                                />
                            </label>
                            <button className='admin-btn'>Submit</button>
                        </form>
                        <div className="bg" onClick={() => {
                            setModal(false)
                            setModal2(false)
                        }}/>
                    </div>
                }
            </>
        </div>
    )
}

export default AdminMenu
