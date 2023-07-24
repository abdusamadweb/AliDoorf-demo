import './Contact.scss'
import React from 'react'

const Contact = () => {
    return (
        <div className='contact-page page bg-cl py3'>
            <div className="container">
                <div className="titles">
                    <div className="title">Напишите нам</div>
                </div>
                <div className='contact-page__body grid'>
                    <form className='form'>
                        <label className='form__label'>
                            <i className="fa-solid fa-user icon"/>
                            <input
                                className='inp'
                                type="text"
                                placeholder='Ваше имя'
                            />
                        </label>
                        <label className='form__label'>
                            <i className="fa-solid fa-phone icon"/>
                            <input
                                className='inp'
                                type="text"
                                placeholder='Телефон'
                            />
                        </label>
                        <label className='form__label'>
                            <i className="fa-regular fa-building icon"/>
                            <input
                                className='inp'
                                type="text"
                                placeholder='Город'
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
                                placeholder='Собшение'
                            />
                        </label>
                        <button className='form__btn fw600 mt2'>Отправить</button>
                    </form>
                    <div className="contact">
                        <h3 className="title fw400 fz22 mt1 pb2 mb2">КОНТАКТЫ</h3>
                        <div className='contact__body'>
                            <div className='mb2'>
                                <h4 className="name">Email</h4>
                                <a className='link' href="mailto: nmadr@mail.co">nmadr@mail.co</a>
                            </div>
                            <div>
                                <h4 className="name">Телефон</h4>
                                <a className='link' href="tel: +998330012223">+998 33 001 22 23</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
