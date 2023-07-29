import './AboutMain.scss'
import React, {useState} from 'react'

const AboutMain = () => {

    const [popupModal, setPopupModal] = useState(false)


    return (
        <div className='about page'>
            <div className="bg-shadow"/>
            <div className="container">
                <div className="about__titles">
                    <span className="title mb2">О компании</span>
                    <h2 className='subtitle mb2'>
                        <span className='txt'>Производим</span>

                    </h2>
                    <button className='btn' onClick={() => setPopupModal(true)}>заявка на сотрудничество</button>
                </div>
            </div>
            <div className={`modal grid grid-center ${popupModal ? 'active' : ''}`}>
                <div className={`form ${popupModal ? 'active' : ''}`}>
                    <button className='form__close' onClick={() => setPopupModal(false)}>
                        <i className="fa-solid fa-x icon"/>
                    </button>
                    <span className='form__title'>Заявка на сотрудничество</span>
                    <label className='form__label'>
                        <input
                            className='inp'
                            type="text"
                            placeholder='Ваше имя'
                        />
                    </label>
                    <label className='form__label'>
                        <input
                            className='inp'
                            type="email"
                            placeholder='Email'
                        />
                    </label>
                    <label className='form__label'>
                        <input
                            className='inp'
                            type="tel"
                            placeholder='Телефон'
                        />
                    </label>
                    <label className='form__label'>
                        <input
                            className='inp'
                            type="text"
                            placeholder='Город'
                        />
                    </label>
                    <label className='form__label'>
                        <textarea
                            className='inp area'
                            placeholder='Сообшение'
                        />
                    </label>
                    <button className='form__btn'>отправить</button>
                </div>
                <div className="bg" onClick={() => setPopupModal(false)}/>
            </div>
        </div>
    )
}

export default AboutMain
