import './Hero.scss'
import React, {useState} from 'react'
import videoPre from "../../../assets/images/video-pre.jpg";
import videoSc from "../../../assets/videos/alidoorf-video.mp4";
import ChatUs from "./ChatUs";

const Hero = () => {

    const [chatUsBtn, setChatUsBtn] = useState(false)


    return (
        <div className='home page'>
            <div className='home__videos'>
                <button
                    className={`contact-btn ${chatUsBtn ? 'active' : ''}`}
                    onClick={() => setChatUsBtn(prev => !prev)}
                >
                    написать нам
                </button>
                <video
                    className='video'
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    poster={videoPre}
                    muted
                >
                    <source src={videoSc} type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <div className="home__titles">
                    <div className="subtitle before">
                        <span className='txt'>Официальный сайт фабрики</span>
                    </div>
                    <h1 className='title mt1 lato fw300'>
                        <span className='txt'>23 года</span>
                        на рынке дверей
                    </h1>
                    <a className='tel before fz20' href="tel:+998902221212">
                        <i className="fa-solid fa-square-phone icon"/>
                        <span className='txt'>+998 90 222 12 12</span>
                    </a>
                </div>
            </div>
            <ChatUs chatUsBtn={chatUsBtn} />
        </div>
    )
}

export default Hero
