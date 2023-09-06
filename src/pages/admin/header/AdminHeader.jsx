import './AdminHeader.scss'
import React, {useState} from 'react'
import {Link, NavLink, useLocation} from "react-router-dom";

const AdminHeader = () => {

    const location = useLocation()

    //states
    const [pages, setPages] = useState(false)
    const [alidoorf, setAlidoorf] = useState(false)


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
                                    <i className={`fa-solid fa-chevron-right icon ${location.pathname.includes('alidoorf') ? 'active' : ''}`}/>
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
                        </ul>
                    </li>
                    <li className="item">
                        <NavLink className={`item__txt row`} to='/admin/menu'>
                            Menu
                            <i className="fa-solid fa-chevron-right icon"/>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={`item__txt row`} to='/admin/colors'>
                            Colors
                            <i className="fa-solid fa-chevron-right icon"/>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={`item__txt row`} to='/admin/forms'>
                            Forms
                            <i className="fa-solid fa-chevron-right icon"/>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className={`item__txt row`} to='/admin/footer'>
                            Footer
                            <i className="fa-solid fa-chevron-right icon"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminHeader
