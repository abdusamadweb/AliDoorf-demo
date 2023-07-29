import './Footer.scss'
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

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


    return (
        <div className='footer'>
            <div className="footer__inner">
                <div className="container">
                    <div className="footer__top pb2">
                        <div className="row between align-center mb1">
                            <Link className='logo' to='/'>
                                <h1 className='logo__title'>alidoorf</h1>
                            </Link>
                            <h5 className="txt fw400">Подписывайтесь</h5>
                        </div>
                        <div className='row between no-wrap'>
                            <p className='desc'>
                                ООО «GEONA» использует файлы «cookie», с целью персонализации сервисов и повышения удобства пользования веб-сайтом. «Cookie» представляют собой небольшие файлы, содержащие информацию о предыдущих посещениях веб-сайта. Если вы не хотите использовать файлы «cookie», измените настройки браузера.
                            </p>
                            <div className='social row no-wrap'>
                                <a
                                    className='social__link'
                                    href="https://youtube.com"
                                    target='_blank'
                                    onMouseMoveCapture={(e)=> handleMouseMove(e)}
                                    onMouseLeave={() => setMousePosition({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition.left * 3.125}px, ${mousePosition.top * 3.125}px)`}}
                                >
                                    <i className="fa-brands fa-youtube icon"/>
                                </a>
                                <a
                                    className='social__link'
                                    href="https://vk.com"
                                    target='_blank'
                                    onMouseMoveCapture={(e)=> handleMouseMove2(e)}
                                    onMouseLeave={() => setMousePosition2({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition2.left * 3.125}px, ${mousePosition2.top * 3.125}px)`}}
                                >
                                    <i className="fa-brands fa-vk icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bot row no-wrap between pt2">
                        <p className='copyright'>
                            2022 - 2023 © ALIDOORF. Все права защищены.
                        </p>
                        <ul className='list row align-center'>
                            <li className='item'>
                                <Link className='item__link' to='/alidoorf/catalog'>католог</Link>
                            </li>
                            <li className='item'>
                                <Link className='item__link' to='/alidoorf/about'>о компании</Link>
                            </li>
                            <li className='item'>
                                <Link className='item__link' to='/contacts'>контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
