import './AdminHeader.scss'
import React, {useState} from 'react'
import {Link, NavLink, useLocation} from "react-router-dom";

const AdminHeader = () => {

    const location = useLocation()

    //states
    const [pages, setPages] = useState(false)
    const [alidoorf, setAlidoorf] = useState(false)
    const [primeloft, setPrimeloft] = useState(false)
    const [mebel, setMebel] = useState(false)


    return (
        <div
            className={`admin-header ${location.pathname.includes('admin') ? 'd-block' : 'd-none'}`}
            style={{display: location.pathname.includes('login') ? 'none' : ''}}
        >
            <div className='admin-header__title'>ADMiN</div>
            <nav className='nav'>
                <ul className='nav__list row flex-column'>
                    <li className="item">
                        <Link className={`item__txt row ${location.pathname === '/admin' ? 'active' : ''}`} to='/admin'>
                            home
                            <i className="fa-solid fa-chevron-right icon"/>
                        </Link>
                    </li>
                    <li className={`item ${pages ? 'clicked' : ''} no-copy`}>
                        <div className={`item__txt hovered ${location.pathname.includes('pages') ? 'active' : ''}`} onClick={() => setPages(!pages)}>
                            <span>pages</span>
                            <i className="fa-solid fa-chevron-right icon"/>
                        </div>
                        <ul className='item__inner'>
                            <li className='wrap'>
                                <NavLink className='wrap__link item__txt' to='/admin/pages/main'>
                                    main page
                                </NavLink>
                            </li>
                            <li className={`wrap ${alidoorf ? 'clicked' : ''}`}>
                                <div className='item__txt hovered' onClick={() => setAlidoorf(!alidoorf)}>
                                    <span>alidoorf</span>
                                    <i className="fa-solid fa-chevron-right icon"/>
                                </div>
                                <ul className='wrap__list'>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/alidoorf/home'>
                                            home
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/alidoorf/about'>
                                            about
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/alidoorf/news'>
                                            news
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/alidoorf/catalog'>
                                            catalog
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={`wrap ${primeloft ? 'clicked' : ''}`}>
                                <div className='item__txt hovered' onClick={() => setPrimeloft(!primeloft)}>
                                    <span>primeloft</span>
                                    <i className="fa-solid fa-chevron-right icon"/>
                                </div>
                                <ul className='wrap__list'>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/primeloft/home'>
                                            home
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/primeloft/about'>
                                            about
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/primeloft/news'>
                                            news
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/primeloft/catalog'>
                                            catalog
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={`wrap ${mebel ? 'clicked' : ''}`}>
                                <div className='item__txt hovered' onClick={() => setMebel(!mebel)}>
                                    <span>mebel</span>
                                    <i className="fa-solid fa-chevron-right icon"/>
                                </div>
                                <ul className='wrap__list'>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/mebel/home'>
                                            home
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/mebel/about'>
                                            about
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/mebel/news'>
                                            news
                                        </NavLink>
                                    </li>
                                    <li className='li'>
                                        <NavLink className='li__link item__txt wrap__link' to='/admin/pages/mebel/catalog'>
                                            catalog
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminHeader
