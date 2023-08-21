import React, {useEffect, useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import insta from '../../assets/images/intagram.png'
import tg from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'
import ru from '../../assets/images/lang-ru.png'
import en from '../../assets/images/lang-en.jpg'
import uz from '../../assets/images/lang-uz.jpg'
import {formatPhone} from "../../assets/scripts/global";
import {getData} from "../../api/apiResp";

const HeaderNav = ({ openNav, setOpenNav, lang, setLang, result }) => {


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


    // get data
    const [result1, setResult1] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/menu?type=alidoorf`)
            setResult1(res)
        }
        get()
    }, [])

    const [result2, setResult2] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/menu?type=primeloft`)
            setResult2(res)
        }
        get()
    }, [])


    return (
        <div className={`navs__modal grid grid-center ${openNav ? 'active' : ''}`}>
            <div className='content grid grid-center'>
                <div className='lang center-absolute'>
                    {
                        langs.map((i, index) => (
                            i.txt !== lang &&
                            <button
                                className='lang__btn'
                                onClick={() => setLang(i.txt)}
                                key={index}
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
                                result1?.data?.map((i, index) => (
                                    <li
                                        className='item'
                                        key={index}
                                        onClick={() => setOpenNav(false)}
                                    >
                                        <NavLink className='item__link' to={i.link}>{i.name}</NavLink>
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
                                result2?.data?.map((i, index) => (
                                    <li
                                        className='item'
                                        key={index}
                                        onClick={() => setOpenNav(false)}
                                    >
                                        <NavLink className='item__link' to={i.link}>{i.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>

                <div className='contact'>
                    <div className='contact__titles'>
                        <span className='title'>{ result.data?.menu_contact || '...' }:</span>
                        <div className="row align-center">
                            <a className='mail tel' href={`tel: ${result.data?.global_phone || '+998'}`}>
                                { formatPhone(result.data?.global_phone || '+998') }
                            </a>
                            <a className='mail' href={`mailto: ${result.data?.global_address || '...'}`}>
                                { result.data?.global_email || '...' }
                            </a>
                        </div>
                    </div>
                    <div className="contact__titles">
                        <span className='title'>Address:</span>
                        <address className='address'>{ result.data?.global_address || '...' }</address>
                    </div>
                    <div className="contact__titles links" style={{marginBottom: '0'}}>
                        <span className='title'>{ result.data?.footer_flw_txt || 'Follow' }:</span>
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

                <span className='txt-bg fw600'>{ result.data?.menu_bg_txt || 'Menu' }</span>
            </div>
        </div>
    )
}

export default HeaderNav
