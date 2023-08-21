import './Forms.scss'
import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../api/apiResp";
import FormsEmail from "./FormsEmail";
import RequestForms from "./RequestForms";

const Forms = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'form_access_name',
        'form_access_phone',
        'form_access_city',
        'form_access_email',
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [name, setName] = useState('false')
    const [phone, setPhone] = useState('false')
    const [city, setCity] = useState('false')
    const [email, setEmail] = useState('false')

    useEffect(() => {
        setName(result?.data?.form_access_name || 'false')
        setPhone(result?.data?.form_access_phone || 'false')
        setCity(result?.data?.form_access_city || 'false')
        setEmail(result?.data?.form_access_email || 'false')
    }, [result, effect])


    const postName = () => {
        const item = {
            key: 'form_access_name',
            valueRu: name,
            valueEn: name,
            valueUz: name
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postPhone = () => {
        const item = {
            key: 'form_access_phone',
            valueRu: phone,
            valueEn: phone,
            valueUz: phone
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postCity = () => {
        const item = {
            key: 'form_access_city',
            valueRu: city,
            valueEn: city,
            valueUz: city
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postEmail = () => {
        const item = {
            key: 'form_access_email',
            valueRu: email,
            valueEn: email,
            valueUz: email
        }
        putData('/api/alidoorf/v1/content/update-content', item)
    }

    const postData = (e) => {
        e.preventDefault()

        postName()
        postPhone()
        postCity()
        postEmail()
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div className='forms admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Forms</div>
            <FormsEmail />
            <div className='home__chat mb3'>
                <div className='admin-main__title fw500 fz20 mb1'>Access forms</div>
                <form className='form' onSubmit={postData}>
                    <div className='form__labels'>
                        <div className='form__label'>
                            <i className="fa-solid fa-user icon"/>
                            <span className='inp'>Ваше имя</span>
                        </div>
                        <div
                            className={`checkbox no-copy ${name === 'true' ? 'active' : ''}`}
                            onClick={() => setName(prev => prev === 'true' ? 'false' : 'true')}
                        >
                            <i className="fa-solid fa-check icon"/>
                        </div>
                    </div>
                    <div className='form__labels'>
                        <div className='form__label'>
                            <i className="fa-solid fa-phone icon"/>
                            <span className='inp'>Телефон</span>
                        </div>
                        <div
                            className={`checkbox no-copy ${phone === 'true' ? 'active' : ''}`}
                            onClick={() => setPhone(prev => prev === 'true' ? 'false' : 'true')}
                        >
                            <i className="fa-solid fa-check icon"/>
                        </div>
                    </div>
                    <div className='form__labels'>
                        <div className='form__label'>
                            <i className="fa-regular fa-building icon"/>
                            <span className='inp'>Город</span>
                        </div>
                        <div
                            className={`checkbox no-copy ${city === 'true' ? 'active' : ''}`}
                            onClick={() => setCity(prev => prev === 'true' ? 'false' : 'true')}
                        >
                            <i className="fa-solid fa-check icon"/>
                        </div>
                    </div>
                    <div className='form__labels'>
                        <div className='form__label'>
                            <i className="fa-solid fa-at icon"/>
                            <span className='inp'>Email</span>
                        </div>
                        <div
                            className={`checkbox no-copy ${email === 'true' ? 'active' : ''}`}
                            onClick={() => setEmail(prev => prev === 'true' ? 'false' : 'true')}
                        >
                            <i className="fa-solid fa-check icon"/>
                        </div>
                    </div>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>
            <RequestForms />
        </div>
    )
}

export default Forms
