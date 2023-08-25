import './Hero.scss'
import React, {useEffect, useState} from 'react'
import videoPre from "../../../assets/images/video-pre.png";
import videoSc from "../../../assets/videos/alidoorf-video.mp4";
import ChatUs from "./ChatUs";
import {getPostDataUser} from "../../../api/apiResp";
import {formatPhone} from "../../../assets/scripts/global";

const Hero = ({ lang }) => {

    const [chatUsBtn, setChatUsBtn] = useState(false)

    const [result, setResult] = useState([])
    const arr = [
        'main_hero_sub',
        'main_hero_tit',
        'main_hero_tit_txt',
        'global_phone',
        'chat_us',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    return (
        <div className='home page'>
            <div className='home__videos'>
                <button
                    className={`contact-btn ${chatUsBtn ? 'active' : ''}`}
                    onClick={() => setChatUsBtn(prev => !prev)}
                >
                    { result.data?.chat_us || '...' }
                </button>
                <video
                    className='video'
                    autoPlay={true}
                    loop={true}
                    poster={videoPre}
                    muted={true}
                    controls={false}
                >
                    <source src={videoSc} type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <div className="home__titles">
                    <div className="subtitle before">
                        <span className='txt'>{ result.data?.main_hero_sub || '...' }</span>
                    </div>
                    <h1 className='title mt1 lato fw300'>
                        <span className='txt'>{ result.data?.main_hero_tit_txt || '...' }</span>
                        { result.data?.main_hero_tit || '...' }
                    </h1>
                    <a className='tel before fz20' href={`tel:${result.data?.global_phone || '...'}`}>
                        <i className="fa-solid fa-square-phone icon"/>
                        <span className='txt'>{ formatPhone(result.data?.global_phone || '+998') }</span>
                    </a>
                </div>
            </div>
            <ChatUs chatUsBtn={chatUsBtn} lang={lang} />
        </div>
    )
}

export default Hero
