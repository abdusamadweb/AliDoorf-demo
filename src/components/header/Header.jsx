import './Header.scss'
import React, {useEffect, useState} from 'react';
import ScrollTop from "../../assets/icons/ScrollTop";
import {Link} from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Header = ({ darkMode, setDarkMode }) => {

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

    const [openNav, setOpenNav] = useState(false)


    const [scrollCount, setScrollCount] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    const handleScroll = () => {
        const maxScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrollY = window.pageYOffset
        setScrollCount(((scrollY * 100) / maxScrollY).toFixed())
    }


    return (
        <div className='header'>
            <div className="header__inner">
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
                                <a className='item__link' href="" target='_blank'>
                                    <i className="fa-brands fa-youtube icon"/>
                                    <span className='name'>youtube</span>
                                </a>
                            </li>
                            <li className='item'>
                                <a className='item__link' href="" target='_blank'>
                                    <i className="fa-brands fa-vk icon"/>
                                    <span className='name'>vk</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__sc row flex-column between align-center pt1 pb3">
                        <span/>
                        <h2 className='horizontal-title fw300 fz14'>Главная</h2>
                        <div className='navs'>
                            <button
                                className='open-nav-btn'
                                onClick={() => setOpenNav(prev => !prev)}
                                onMouseMoveCapture={(e)=> handleMouseMove(e)}
                                onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                style={{transform: `translate(${mousePosition.left * 2.125}px, ${mousePosition.top * 2.125}px)`}}
                            >
                                <span
                                    className='circle'
                                    onMouseMoveCapture={(e)=> handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 3.125}px, ${mousePosition.top * 3.125}px)`}}
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
                            <HeaderNav openNav={openNav} />
                        </div>
                        <div className='scrolls'>
                            <a className='scrolls__link fz14 mb2' href="">каталог</a>
                            <div className='scroll'>
                                <ScrollTop />
                                <span className='scroll__count'>{ scrollCount }%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header__slider'>
                    <span>alidoorf</span>
                    <span>primeloft</span>
                    <span>alidoorf</span>
                    <span>primeloft</span>
                </div>
            </div>
        </div>
    )
}

export default Header