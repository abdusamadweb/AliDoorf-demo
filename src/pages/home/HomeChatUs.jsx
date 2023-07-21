import React from 'react'

const HomeChatUs = ({ chatUsBtn }) => {
    return (
        <div className={`home__chat grid px3 ${chatUsBtn ? 'active' : ''}`}>
            <form className='form'>
                <span className='title fw600 fz22 pb2 mb2'>НАПИСАТЬ НАМ</span>
                <label className='form__label'>
                    <i className="fa-solid fa-user icon"/>
                    <input className='inp' type="text" placeholder='Ваше имя'/>
                </label>
                <label className='form__label'>
                    <i className="fa-solid fa-phone icon"/>
                    <input className='inp' type="text" placeholder='Телефон'/>
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
    )
}

export default HomeChatUs
