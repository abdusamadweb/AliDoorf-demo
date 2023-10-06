import './Header.scss'
import React, {useEffect, useState} from 'react'
import ScrollTop from "../../assets/icons/ScrollTop"
import {Link, useLocation} from "react-router-dom"
import HeaderNav from "./HeaderNav"
import {getPostDataUser} from "../../api/apiResp"
import {API_TEST} from "../../api/apiConfig"
import defLogo from '../../assets/images/logo.png'
import sun from '../../assets/icons/sun.png'

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


    // data
    const [result, setResult] = useState([])
    const arr = [
        'logo',

        'header_menu',
        'header_catalog',
        'header_route_home',
        'header_route_catalog',
        'header_route_news',
        'header_route_about',
        'header_route_contact',

        'menu_contact',
        'menu_address',
        'menu_bg_txt',
        'footer_flw_txt',

        'global_phone',
        'global_email',
        'global_address',

        'main_page_parallax',
        'ali_home_parallax',
        'ali_about_parallax',
        'ali_news_parallax',
        'ali_catalog_parallax',
        'contact_page_parallax',

        'color_primary_light',
        'color_primary_dark',

        'ali_catalog_hero_img'
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    // get img
    const logoImg = (API_TEST + 'api/alidoorf/v1/attachment/get/' + result.data?.logo) || defLogo

    const catalogImg = API_TEST + 'api/alidoorf/v1/attachment/get/' + result?.data?.ali_catalog_hero_img


    return (
        !location.pathname.includes('/admin') &&
        <div className='header'>
            <div className='header__inner'
                 style={{backgroundImage: location.pathname.includes('/catalog') && `url(${catalogImg})`}}>
                {
                    location.pathname === '/catalog' &&
                    <div className='bg-shadow'/>
                }
                <div className='row'>
                    <div className='header__main pt1 pb3'>
                        <Link className='logo' to='/'>
                            {
                                result.data?.logo ?
                                    <img
                                        className='img'
                                        style={{filter: darkMode ? 'invert(1)' : 'none'}}
                                        src={logoImg}
                                        alt="logo"
                                    />
                                    :
                                    <img
                                        className='img'
                                        src={defLogo}
                                        alt="site-logo"
                                    />
                            }
                        </Link>
                        <div className='for-padd row flex-column between align-center px3 pb1'>
                            <span/>
                            <div className='dark-light'>
                                {
                                    !darkMode ?
                                        <button className='btn dark-btn' onClick={() => setDarkMode(true)}>
                                            <i className="fa-regular fa-moon icon"/>
                                        </button>
                                        :
                                        <button className='btn light-btn' onClick={() => setDarkMode(false)}>
                                            <img className='icon sun' src={sun} alt="sun-icon"/>
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
                    </div>
                    <div className="header__sc row flex-column between align-center pt1 pb3">
                        <h2 className='horizontal-title fw300 fz14'>
                            {
                                location.pathname.includes('/about') ? result.data?.header_route_about || 'About'
                                    : location.pathname.includes('/news') ? result.data?.header_route_news || 'News'
                                        : location.pathname.includes('/catalog') ? result.data?.header_route_catalog || 'Catalog'
                                            : location.pathname.includes('/contacts') ? result.data?.header_route_contact || 'Contacts'
                                                : result.data?.header_route_home || 'Home'
                            }
                        </h2>
                        <div className='navs'>
                            <button
                                className='open-nav-btn'
                                onClick={() => setOpenNav(prev => !prev)}
                                onMouseMoveCapture={(e) => handleMouseMove(e)}
                                onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                style={{transform: `translate(${mousePosition.left * 2.125}px, ${mousePosition.top * 2.125}px)`}}
                            >
                                <span
                                    className='circle'
                                    onMouseMoveCapture={(e) => handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 4.125}px, ${mousePosition.top * 4.125}px)`}}
                                />
                                <div className={`sticks ${openNav ? 'active' : ''}`}>
                                    <div className="row between">
                                        <span className='stick stick1'/>
                                        <span className='stick stick2'/>
                                    </div>
                                    <span className='stick stick3'/>
                                </div>
                                <span className='txt fw500 fz14'>{result.data?.header_menu || 'Menu'}</span>
                            </button>
                            <HeaderNav
                                openNav={openNav}
                                setOpenNav={setOpenNav}
                                lang={lang}
                                setLang={setLang}
                                result={result}
                            />
                        </div>
                        <div className='scrolls'>
                            <Link className='scrolls__link fz14 mb2'
                                  to='/alidoorf/catalog'>{result.data?.header_catalog || 'catalog'}</Link>
                            <div className='scroll'>
                                <ScrollTop/>
                                <span className='scroll__count'>{scrollCount}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header__slider'>
                    {
                        location.pathname.includes('/about') ?
                            <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                {[...Array(8)].map((_, index) => (
                                    <React.Fragment key={index}>
                                        <span
                                            className='txt'>{result.data?.ali_about_parallax || 'About company'}</span>
                                        <span
                                            className='txt txt-stroke'>{result.data?.ali_about_parallax || 'About company'}</span>
                                    </React.Fragment>
                                ))}
                            </div>
                            : location.pathname.includes('/news') ?
                                <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                    {[...Array(8)].map((_, index) => (
                                        <React.Fragment key={index}>
                                            <span className='txt'>{result.data?.ali_news_parallax || 'News'}</span>
                                            <span
                                                className='txt txt-stroke'>{result.data?.ali_news_parallax || 'News'}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                                : location.pathname.includes('/catalog') ?
                                    <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                        {[...Array(8)].map((_, index) => (
                                            <React.Fragment key={index}>
                                                <span
                                                    className='txt'>{result.data?.ali_catalog_parallax || 'Catalog'}</span>
                                                <span
                                                    className='txt txt-stroke'>{result.data?.ali_catalog_parallax || 'Catalog'}</span>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    : location.pathname.includes('/contacts') ?
                                        <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                            {[...Array(8)].map((_, index) => (
                                                <React.Fragment key={index}>
                                                    <span
                                                        className='txt'>{result.data?.contact_page_parallax || 'Contacts'}</span>
                                                    <span
                                                        className='txt txt-stroke'>{result.data?.contact_page_parallax || 'Contacts'}</span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        :
                                        <div className='txts' style={{transform: `translate(0px, ${slideScrollCount}px)`}}>
                                            {[...Array(8)].map((_, index) => (
                                                <React.Fragment key={index}>
                                                    <span
                                                        className='txt'>{result.data?.main_page_parallax || 'Alidoorf'}</span>
                                                    <span
                                                        className='txt txt-stroke'>{result.data?.main_page_parallax || 'Primeloft'}</span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                    }
                </div>
            </div>
            <div className={`header__wrapper ${show && !openNav ? 'hide' : ''} between align-center px2 py1`}>
                <div className='row align-center' style={{flex: 1}}>
                    <Link className='logo mr2' to='/'>
                        {
                            result.data?.logo ?
                                <img
                                    className='img'
                                    style={{filter: darkMode ? 'invert(1)' : 'none'}}
                                    src={logoImg}
                                    alt="logo"
                                />
                                :
                                <img
                                    className='img'
                                    src={defLogo}
                                    alt="site-logo"
                                />
                        }
                    </Link>
                    <div className="dark-light">
                        {
                            !darkMode ?
                                <button className='btn dark-btn' onClick={() => setDarkMode(true)}>
                                    <i className="fa-regular fa-moon icon"/>
                                </button>
                                :
                                <button className='btn light-btn' onClick={() => setDarkMode(false)}>
                                    <img className='icon sun' src={sun} alt="sun-icon"/>
                                </button>
                        }
                    </div>
                </div>
                <div className="row align-center">
                    <Link className='link mr2' to='/alidoorf/catalog'>{result.data?.header_catalog || 'catalog'}</Link>
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
                            <span className='txt fw500 fz14'>{result.data?.header_menu || 'Menu'}</span>
                        </button>
                        <HeaderNav
                            openNav={openNav}
                            setOpenNav={setOpenNav}
                            lang={lang}
                            setLang={setLang}
                            result={result}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header