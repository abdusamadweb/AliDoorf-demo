import './Contacts.scss'
import React, {useEffect, useState} from 'react'
import insta from "../../assets/images/intagram.png";
import tg from "../../assets/images/telegram.png";
import youtube from "../../assets/images/youtube.png";
import {getPostDataUser} from "../../api/apiResp";
import {formatPhone} from "../../assets/scripts/global";

const Contacts = ({ lang }) => {


    // data
    const [result, setResult] = useState([])
    const arr = [
        'menu_contact',
        'footer_flw_txt',
        'global_phone',
        'global_email',
        'global_address',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    return (
        <div className='contacts page bg-cl py3'>
            <div className="container">
                <h1 className="contacts__title pl3">{result.data?.menu_contact || '...'}</h1>
                <div className="contacts__body grid">
                    <div>
                        <div className='mb3'>
                            <h3 className="title">Address</h3>
                            <address className='txt'>{result.data?.global_address || '...'}</address>
                        </div>
                        <div className='links'>
                            <div className="row no-wrap align-center mb2">
                                <i className="fa-solid fa-mobile-screen-button icon"/>
                                <a className='link' href={`tel: ${result.data?.global_phone || '+998'}`}>{ formatPhone(result.data?.global_phone || '+998') }</a>
                            </div>
                            <div className="row no-wrap align-center">
                                <i className="fa-solid fa-envelope icon"/>
                                <a className='link' href={`mailto: ${result.data?.global_email || '@...'}`}>{result.data?.global_email || '@...'}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="title">{result.data?.footer_flw_txt || '...'}</h3>
                        <div className="row align-center" style={{gap: '10px'}}>
                            <a className='link-icon' href="https://instagram.com/alidoorf" target='_blank'>
                                <img className='link-icon__img' src={insta} alt="instagram"/>
                            </a>
                            <a className='link-icon' href="https://t.me/alidoorfuz" target='_blank'>
                                <img className='link-icon__img' src={tg} alt="telegram"/>
                            </a>
                            <a className='link-icon' href="https://youtube.com/alidoorfuz" target='_blank'>
                                <img className='link-icon__img' src={youtube} alt="youtube"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
