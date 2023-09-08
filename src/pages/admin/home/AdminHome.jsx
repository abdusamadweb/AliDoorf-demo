import './AdminHome.scss'
import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../api/apiResp";
import AdminLogo from "./AdminLogo";

const AdminHome = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'global_phone',
        'global_email',
        'global_address'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [addressRu, setAddressRu] = useState('')
    const [addressEn, setAddressEn] = useState('')
    const [addressUz, setAddressUz] = useState('')

    useEffect(() => {
        setPhone(result?.data?.global_phone || '')
        setEmail(result?.data?.global_email || '')

        setAddressRu(result?.data?.global_address_ru || '')
        setAddressEn(result?.data?.global_address_en || '')
        setAddressUz(result?.data?.global_address_uz || '')
    }, [result, effect])


    const postPhone = () => {
        const item = {
            key: 'global_phone',
            valueRu: phone,
            valueEn: phone,
            valueUz: phone
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postAddress = () => {
        const item = {
            key: 'global_address',
            valueRu: addressRu,
            valueEn: addressEn,
            valueUz: addressUz
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postEmail = () => {
        const item = {
            key: 'global_email',
            valueRu: email,
            valueEn: email,
            valueUz: email
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postData = (e) => {
        e.preventDefault()

        postPhone()
        postAddress()
        postEmail()
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div className='admin admin-page py2'>
            <div className='admin__inner'>
                <div className='admin__title fw500 mb3'>Welcome to admin !</div>
                <AdminLogo />

                <div className='content'>
                    <div className='content__subtitle fz22 fw500 mb2'>Contacts:</div>
                    <form className='content__form' onSubmit={postData}>
                        <label>
                            <span className='txt'>Global phone number:</span>
                            <input
                                className='admin-inp'
                                type="tel"
                                placeholder='Number . . .'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>Global email:</span>
                            <input
                                className='admin-inp'
                                type="email"
                                placeholder='Email . . .'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <div>
                            <label>
                                <span className='txt'>Global address Ru:</span>
                                <textarea
                                    className='admin-inp'
                                    placeholder='Address . . .'
                                    value={addressRu}
                                    onChange={(e) => setAddressRu(e.target.value)}
                                />
                            </label>
                            <label>
                                <span className='txt'>Global address En:</span>
                                <textarea
                                    className='admin-inp'
                                    placeholder='Address . . .'
                                    value={addressEn}
                                    onChange={(e) => setAddressEn(e.target.value)}
                                />
                            </label>
                            <label>
                                <span className='txt'>Global address Uz:</span>
                                <textarea
                                    className='admin-inp'
                                    placeholder='Address . . .'
                                    value={addressUz}
                                    onChange={(e) => setAddressUz(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className='admin-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminHome
