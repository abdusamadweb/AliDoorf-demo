import React, {useEffect, useState} from 'react'
import {getPostDataUser} from "../../../api/apiResp";
import {formatPhone} from "../../../assets/scripts/global";

const ChatUs = ({ chatUsBtn, lang }) => {

    const [result, setResult] = useState([])
    const arr = [
        'global_phone',
        'global_email',
        'chat_us',
        'chat_us_btn',
        'chat_us_contact',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    return (
        <div className={`home__chat grid px3 ${chatUsBtn ? 'active' : ''}`}>
            <form className='form'>
                <span className='title fw600 fz22 pb2 mb2'>{ result.data?.chat_us || '...' }</span>
                <label className='form__label'>
                    <i className="fa-solid fa-user icon"/>
                    <input
                        className='inp'
                        type="text"
                        placeholder='Your name'
                    />
                </label>
                <label className='form__label'>
                    <i className="fa-solid fa-phone icon"/>
                    <input
                        className='inp'
                        type="text"
                        placeholder='Phone number'
                    />
                </label>
                <label className='form__label'>
                    <i className="fa-regular fa-building icon"/>
                    <input
                        className='inp'
                        type="text"
                        placeholder='City'
                    />
                </label>
                <label className='form__label'>
                    <i className="fa-solid fa-at icon"/>
                    <input
                        className='inp'
                        type="text"
                        placeholder='Email'
                    />
                </label>
                <label className='form__label'>
                    <i className="fa-solid fa-envelope icon"/>
                    <textarea
                        className='inp area'
                        placeholder='Message'
                    />
                </label>
                <button className='form__btn fw600 mt2'>{ result.data?.chat_us_btn || '...' }</button>
            </form>
            <div className="contact">
                <h3 className="title fw400 fz22 mt1 pb2 mb2">{ result.data?.chat_us_contact || '...' }</h3>
                <div className='contact__body'>
                    <div className='mb2'>
                        <h4 className="name">Email</h4>
                        <a className='link' href={`mailto: ${result.data?.global_email || '...'}`}>{ result.data?.global_email || '...' }</a>
                    </div>
                    <div>
                        <h4 className="name">Phone Number</h4>
                        <a className='link' href={`tel: ${result.data?.global_phone || '...'}`}>{ formatPhone(result.data?.global_phone || '...') }</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatUs
