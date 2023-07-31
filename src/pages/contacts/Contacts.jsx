import './Contacts.scss'
import React from 'react'
import insta from "../../assets/images/intagram.png";
import tg from "../../assets/images/telegram.png";
import youtube from "../../assets/images/youtube.png";

const Contacts = () => {
    return (
        <div className='contacts page bg-cl'>
            <div className="container">
                <h1 className="contacts__title">Контакты</h1>
                <div className="contacts__body">
                    <div>
                        <h3 className="title">Адрес</h3>
                        <address className='txt'>
                            Чувашская Республика, Чебоксарский район Синьяльское сельское поселение, село Яндово, Геона, участок 1
                        </address>
                    </div>
                    <div>
                        <a className='link' href="tel: +998">+998 33 001 22 23</a>
                        <a className='link' href="mailto: nmadr@ma.co">nmadr@ma.co</a>
                    </div>
                    <div>
                        <h3 className="title">Подписывайтесь</h3>
                        <div className="row align-center" style={{gap: '10px'}}>
                            <a className='link-icon' href="instagram.com/" target='_blank'>
                                <img className='link__img' src={insta} alt="instagram"/>
                            </a>
                            <a className='link-icon' href="t.me/" target='_blank'>
                                <img className='link__img' src={tg} alt="telegram"/>
                            </a>
                            <a className='link-icon' href="youtube.com/" target='_blank'>
                                <img className='link__img' src={youtube} alt="youtube"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
