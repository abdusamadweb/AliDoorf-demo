import './Footer.scss'
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {getPostDataUser} from "../../api/apiResp";
import {API_TEST} from "../../api/apiConfig";

const Footer = ({ lang, darkMode }) => {


    const [result, setResult] = useState([])
    const arr = [
        'footer_flw_txt',
        'footer_desc_txt',
        'footer_bot_txt',
        'logo',

        'header_route_catalog',
        'header_route_about',
        'header_route_contact'
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    const location = useLocation()


    // when hover 1
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
    // when hover 2
    const [mousePosition2, setMousePosition2] = useState({
        left: 0,
        top: 0
    })
    const handleMouseMove2 = (e) => {
        setMousePosition2({
            left: e.movementX,
            top: e.movementY
        })
    }


    // get img
    const logoImg = API_TEST + 'api/alidoorf/v1/attachment/get/' + result.data?.logo || null


    return (
        !location.pathname.includes('/admin') &&
        <div className='footer'>
            <div className="footer__inner">
                <div className="container">
                    <div className="footer__top pb2">
                        <div className="row between align-center mb1">
                            <Link className='logo' to='/'>
                                {
                                    logoImg !== null ?
                                        <img
                                            className='logo__img'
                                            style={{filter: darkMode ? 'invert(1)' : 'none'}}
                                            src={logoImg}
                                            alt="site-logo"
                                        />
                                        :
                                        <h1 className='logo__title'>AliDoorf</h1>
                                }
                            </Link>
                            <h5 className="txt fw400">{ result.data?.footer_flw_txt || '...' }</h5>
                        </div>
                        <div className='row between no-wrap'>
                            <p className='desc'>{ result.data?.footer_desc_txt || '...' }</p>
                            <div className='social row no-wrap'>
                                <a
                                    className='social__link'
                                    href="https://instagram.com/alidoorf"
                                    target='_blank'
                                    onMouseMoveCapture={(e) => handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 3.125}px, ${mousePosition.top * 3.125}px)`}}
                                >
                                    <i className="fa-brands fa-instagram icon"/>
                                </a>
                                <a
                                    className='social__link'
                                    href="https://t.me/alidoorfuz"
                                    target='_blank'
                                    onMouseMoveCapture={(e) => handleMouseMove2(e)}
                                    onMouseLeave={() => setMousePosition2({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition2.left * 3.125}px, ${mousePosition2.top * 3.125}px)`}}
                                >
                                    <i className="fa-brands fa-telegram icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bot row no-wrap between pt2">
                        <p className='copyright'>{ result.data?.footer_bot_txt || '...' }</p>
                        <ul className='list row align-center'>
                            <li className='item'>
                                <Link className='item__link' to='/alidoorf/catalog'>{ result.data?.header_route_catalog || '...' }</Link>
                            </li>
                            <li className='item'>
                                <Link className='item__link' to='/alidoorf/about'>{ result.data?.header_route_about || '...' }</Link>
                            </li>
                            <li className='item'>
                                <Link className='item__link' to='/contacts'>{ result.data?.header_route_contact || '...' }</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='fluggi'>developed by FLUGGI IT AGENCY (www.fluggi.uz)</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
