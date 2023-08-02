import './Header.scss'
import React, {useEffect, useState} from 'react';
import ScrollTop from "../../assets/icons/ScrollTop";
import {Link, useLocation} from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Header = ({darkMode, setDarkMode, lang, setLang}) => {

    const location = useLocation()


    // mouse effect hover
    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })
    const handleMouseMove = (e) => {
        setMousePosition({
            left: e.movementX,
            top: e.movementY
        })
    }


    // scroll count
    const [scrollCount, setScrollCount] = useState(0)
    const [slideScrollCount, setSlideScrollCount] = useState(-2350)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
        const maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollY = window.pageYOffset

        setScrollCount(((scrollY * 100) / maxScrollY).toFixed())

        setSlideScrollCount(((scrollY * 2350) / maxScrollY) - 2350)
    }


    const [openNav, setOpenNav] = useState(false)

    // hide header
    const [show, setShow] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY || window.screen.width < 1024) {
                setShow(false)
            } else if (window.scrollY > 150) {
                setShow(true)
            }
            setLastScrollY(window.scrollY)
        }
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])


    return (
        <>
            {
                !location.pathname.includes('/admin') &&
                <div className='header'>
                    <div className={`header__inner ${location.pathname.includes('/catalog') ? 'catalog-bg' : ''}`}>
                        {
                            location.pathname === '/catalog' &&
                            <div className='bg-shadow'/>
                        }
                        <div className='row'>
                            <div className='header__main row flex-column between align-center px2 pt1 pb3'>
                                <Link className='logo' to='/'>
                                    <h1 className='txt fz16'>AliDoorf</h1>
                                </Link>
                                <div className='dark-light'>
                                    {
                                        !darkMode ?
                                            <button className='btn dark-btn' onClick={() => setDarkMode(true)}>
                                                <i className="fa-regular fa-moon icon"/>
                                            </button>
                                            :
                                            <button className='btn light-btn' onClick={() => setDarkMode(false)}>
                                                <i className="fa-regular fa-sun icon"/>
                                            </button>
                                    }
                                </div>
                                <ul className='socical row flex-column align-center'>
                                    <li className='item'>
                                        <a className='item__link' href="https://instagram.com/alidoorf" target='_blank'>
                                            <i className="fa-brands fa-instagram icon"/>
                                            <span className='name'>instagram</span>
                                        </a>
                                    </li>
                                    <li className='item'>
                                        <a className='item__link' href="https://t.me/alidoorfuz" target='_blank'>
                                            <i className="fa-brands fa-telegram icon"/>
                                            <span className='name'>telegram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__sc row flex-column between align-center pt1 pb3">
                                <h2 className='horizontal-title fw300 fz14'>
                                    {
                                        location.pathname.includes('/about') ? 'О компании'
                                            : location.pathname.includes('/news') ? 'Новости'
                                                : location.pathname.includes('/catalog') ? 'Каталог'
                                                    : location.pathname.includes('/contacts') ? 'Контакты'
                                                        : 'Главная'
                                    }
                                </h2>
                                <div className='navs'>
                                    <button
                                        className='open-nav-btn'
                                        onClick={() => setOpenNav(prev => !prev)}
                                        onMouseMoveCapture={(e) => handleMouseMove(e)}
                                        onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                        style={{transform: `translate(${mousePosition.left * 4.125}px, ${mousePosition.top * 4.125}px)`}}
                                    >
                                <span
                                    className='circle'
                                    onMouseMoveCapture={(e) => handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 5.125}px, ${mousePosition.top * 5.125}px)`}}
                                />
                                        <div className={`sticks ${openNav ? 'active' : ''}`}>
                                            <div className="row between">
                                                <span className='stick stick1'/>
                                                <span className='stick stick2'/>
                                            </div>
                                            <span className='stick stick3'/>
                                        </div>
                                        <span className='txt fw500 fz14'>Меню</span>
                                    </button>
                                    <HeaderNav
                                        openNav={openNav}
                                        setOpenNav={setOpenNav}
                                        lang={lang}
                                        setLang={setLang}
                                    />
                                </div>
                                <div className='scrolls'>
                                    <Link className='scrolls__link fz14 mb2' to='/alidoorf/catalog'>каталог</Link>
                                    <div className='scroll'>
                                        <ScrollTop/>
                                        <span className='scroll__count'>{scrollCount}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='header__slider'>
                            <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                <span className='txt'>alidoorf</span>
                                <span className='txt txt-stroke'>primeloft</span>
                                <span className='txt'>alidoorf</span>
                                <span className='txt txt-stroke'>primeloft</span>
                                <span className='txt'>alidoorf</span>
                                <span className='txt txt-stroke'>primeloft</span>
                                <span className='txt'>alidoorf</span>
                                <span className='txt txt-stroke'>primeloft</span>
                            </div>
                        </div>
                    </div>
                    <div className={`header__wrapper ${show && !openNav ? 'hide' : ''} between align-center px2 py1`}>
                        <div className='row align-center'>
                            <Link className='logo mr2' to='/'>
                                <h1 className='txt'>Alidoorf</h1>
                            </Link>
                            <div className="dark-light">
                                {
                                    !darkMode ?
                                        <button className='btn dark-btn' onClick={() => setDarkMode(true)}>
                                            <i className="fa-regular fa-moon icon"/>
                                        </button>
                                        :
                                        <button className='btn light-btn' onClick={() => setDarkMode(false)}>
                                            <i className="fa-regular fa-sun icon"/>
                                        </button>
                                }
                            </div>
                        </div>
                        <div className="row align-center">
                            <Link className='link mr2' to='/alidoorf/catalog'>каталог</Link>
                            <div className='navs'>
                                <button
                                    className='open-nav-btn'
                                    onClick={() => setOpenNav(prev => !prev)}
                                    onMouseMoveCapture={(e) => handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 4.125}px, ${mousePosition.top * 4.125}px)`}}
                                >
                                    <div className={`sticks ${openNav ? 'active' : ''}`}>
                                        <div className="row between">
                                            <span className='stick stick1'/>
                                            <span className='stick stick2'/>
                                        </div>
                                        <span className='stick stick3'/>
                                    </div>
                                    <span className='txt fw500 fz14'>Меню</span>
                                </button>
                                <HeaderNav
                                    openNav={openNav}
                                    setOpenNav={setOpenNav}
                                    lang={lang}
                                    setLang={setLang}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Header