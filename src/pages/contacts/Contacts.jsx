import './Contacts.scss'
import React from 'react'
import insta from "../../assets/images/intagram.png";
import tg from "../../assets/images/telegram.png";
import youtube from "../../assets/images/youtube.png";

const Contacts = () => {
    return (
        <div className='contacts page bg-cl py3'>
            <div className="container">
                <h1 className="contacts__title pl3">Контакты</h1>
                <div className="contacts__body grid">
                    <div>
                        <div className='mb3'>
                            <h3 className="title">Адрес</h3>
                            <address className='txt'>
                                Узбекистан, Андижанская область, город Андижан, ул. Тинчлик, 9
                            </address>
                        </div>
                        <div className='links'>
                            <div className="row no-wrap align-center mb2">
                                <i className="fa-solid fa-mobile-screen-button icon"/>
                                <a className='link' href="tel: +998902221212">+998 90 222 12 12</a>
                            </div>
                            <div className="row no-wrap align-center">
                                <i className="fa-solid fa-envelope icon"/>
                                <a className='link' href="mailto:hello@alidoorf.uz">hello@alidoorf.uz</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="title">Подписывайтесь</h3>
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
