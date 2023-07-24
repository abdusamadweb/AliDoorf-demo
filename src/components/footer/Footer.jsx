import './Footer.scss'
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

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
                            <h5 className="txt">Подписывайтесь</h5>
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
                                    style={{transform: `translate(${mousePosition.left * 2.125}px, ${mousePosition.top * 2.125}px)`}}
                                >
                                    <i className="fa-brands fa-youtube icon"/>
                                </a>
                                <a
                                    className='social__link'
                                    href="https://vk.com"
                                    target='_blank'
                                    onMouseMoveCapture={(e)=> handleMouseMove2(e)}
                                    onMouseLeave={() => setMousePosition2({left: 0, top: 0})}
                                    style={{transform: `translate(${mousePosition2.left * 2.125}px, ${mousePosition2.top * 2.125}px)`}}
                                >
                                    <i className="fa-brands fa-vk icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bot pt2">
                        <p className='copyright'>
                            2000 - 2023 © Geona Doors. Все права защищены.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
