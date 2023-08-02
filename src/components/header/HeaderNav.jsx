import React from 'react'
import {Link, NavLink} from "react-router-dom"
import insta from '../../assets/images/intagram.png'
import tg from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'
import ru from '../../assets/images/lang-ru.png'
import en from '../../assets/images/lang-en.jpg'
import uz from '../../assets/images/lang-uz.jpg'

const HeaderNav = ({openNav, setOpenNav, lang, setLang}) => {

    const nav = {
        alidoorf: [
            {
                title: 'Каталог',
                link: '/alidoorf/catalog'
            },
            {
                title: 'О компании',
                link: '/alidoorf/about'
            },
            {
                title: 'Новости',
                link: '/alidoorf/news'
            },
            {
                title: 'Полезное',
                link: '/contacts'
            },
        ],
        primeloft: [
            {
                title: 'Каталог',
                link: '/primeloft/catalog'
            },
            {
                title: 'О компании',
                link: '/primeloft/about'
            },
            {
                title: 'Новости',
                link: '/primeloft/news'
            },
            {
                title: 'Полезное',
                link: '/contacts'
            },
        ]
    }

    const langs = [
        {
            txt: 'ru',
            img: ru,
        },
        {
            txt: 'en',
            img: en,
        },
        {
            txt: 'uz',
            img: uz,
        }
    ]

    return (
        <div className={`navs__modal grid grid-center ${openNav ? 'active' : ''}`}>
            <div className='content grid grid-center'>
                <div className='lang center-absolute'>
                    {
                        langs.map(i => (
                            i.txt !== lang &&
                            <button
                                className='lang__btn'
                                onClick={() => setLang(i.txt)}
                                key={i.txt}
                            >
                                <img className='img' src={i.img} alt={i.txt}/>
                                <span className='txt'>{ i.txt }</span>
                            </button>
                        ))
                    }
                </div>
                <nav className='nav grid'>
                    <div className='nav__titles'>
                        <h2 className='title'>Alidoorf</h2>
                        <ul className='list row flex-column'>
                            {
                                nav.alidoorf.map(i => (
                                    <li className='item' key={i.title} onClick={() => setOpenNav(false)}>
                                        <NavLink className='item__link' to={i.link}>{i.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className='nav__home' to='/' onClick={() => setOpenNav(false)}>
                        <i className="fa-solid fa-house-chimney icon"/>
                    </Link>
                    <div className='nav__titles sc'>
                        <h2 className='title title2'>Primeloft</h2>
                        <ul className='list row flex-column'>
                            {
                                nav.primeloft.map(i => (
                                    <li className='item' key={i.title} onClick={() => setOpenNav(false)}>
                                        <NavLink className='item__link' to={i.link}>{i.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
                <div className='contact'>
                    <div className='contact__titles'>
                        <span className='title'>Контакты:</span>
                        <div className="row align-center">
                            <a className='mail tel' href='tel:+998902221212'>+998 90 222 12 12</a>
                            <a className='mail' href='mailto:hello@alidoorf.uz'>hello@alidoorf.uz</a>
                        </div>
                    </div>
                    <div className="contact__titles">
                        <span className='title'>Адрес:</span>
                        <address className='address'>
                            Узбекистан, Андижанская область, город Андижан, ул. Тинчлик, 9
                        </address>
                    </div>
                    <div className="contact__titles links" style={{marginBottom: '0'}}>
                        <span className='title'>Подписывайтесь:</span>
                        <div className="row align-center" style={{gap: '10px'}}>
                            <a className='link' href="https://instagram.com/alidoorf" target='_blank'>
                                <img className='link__img' src={insta} alt="instagram"/>
                            </a>
                            <a className='link' href="https://t.me/alidoorfuz" target='_blank'>
                                <img className='link__img' src={tg} alt="telegram"/>
                            </a>
                            <a className='link' href="https://youtube.com/alidoorfuz" target='_blank'>
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
