import React from 'react'
import {Link, NavLink} from "react-router-dom"
import insta from '../../assets/images/intagram.png'
import tg from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'

const HeaderNav = ({ openNav }) => {
    return (
        <div className={`navs__modal grid grid-center ${openNav ? 'active' : ''}`}>
            <div className='content grid grid-center'>
                <nav className='nav grid'>
                    <div className='nav__titles'>
                        <h2 className='title'>Alidoorf</h2>
                        <ul className='list row flex-column'>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Каталог</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>О компании</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Новости</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Полезное</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className='nav__home' to='/'>
                        <i className="fa-solid fa-house-chimney icon"/>
                    </Link>
                    <div className='nav__titles'>
                        <h2 className='title title2'>Primeloft</h2>
                        <ul className='list row flex-column'>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Каталог</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>О компании</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Новости</NavLink>
                            </li>
                            <li className='item'>
                                <NavLink className='item__link' to=''>Полезное</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='contact'>
                    <div className='contact__titles'>
                        <span className='title'>Контакты:</span>
                        <div className="row align-center">
                            <a className='mail tel' href='tel:'>+998 33 001 22 23</a>
                            <a className='mail' href='mailto:'>alidoorf@mail.co</a>
                        </div>
                    </div>
                    <div className="contact__titles">
                        <span className='title'>Адрес:</span>
                        <address className='address'>
                            Чувашская Республика, Чебоксарский район
                            Синьяльское сельское поселение, село Яндово, Геона, участок 1
                        </address>
                    </div>
                    <div className="contact__titles" style={{marginBottom: '0'}}>
                        <span className='title'>Подписывайтесь:</span>
                        <div className="row align-center" style={{gap: '10px'}}>
                            <a className='link' href="instagram.com/" target='_blank'>
                                <img className='link__img' src={insta} alt="instagram"/>
                            </a>
                            <a className='link' href="t.me/" target='_blank'>
                                <img className='link__img' src={tg} alt="telegram"/>
                            </a>
                            <a className='link' href="youtube.com/" target='_blank'>
                                <img className='link__img' src={youtube} alt="youtube"/>
                            </a>
                        </div>
                    </div>
                </div>
                <span className='txt-bg fw600'>Меню</span>
            </div>
        </div>
    )
}

export default HeaderNav
