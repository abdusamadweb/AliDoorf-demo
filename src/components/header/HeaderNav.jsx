import React from 'react'
import {Link, NavLink} from "react-router-dom";

const HeaderNav = ({ openNav }) => {
    return (
        <div className={`navs__modal grid center ${openNav ? 'active' : ''}`}>
            <nav className='nav grid'>
                <div className='nav__titles'>
                    <strong className='title'>Alidoorf</strong>
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
                    <strong className='title'>Alidoorf</strong>
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
                    <div className="row">
                        <a className='tel' href='tel:'>+998 33 001 22 23</a>
                        <a className='tel' href='mailto:'>alidoorf@mail.co</a>
                    </div>
                </div>
                <div className="contact__titles">
                    <span className='title'>Адрес:</span>
                    <address className='address'>
                        Чувашская Республика, Чебоксарский район
                        Синьяльское сельское поселение, село Яндово, Геона, участок 1
                    </address>
                </div>
                <div className="contact__titles">
                    <span className='title'>Подписывайтесь:</span>
                    icons: -- code here --
                </div>
            </div>
        </div>
    )
}

export default HeaderNav
