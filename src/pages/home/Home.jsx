import './Home.scss'
import React, {useState} from 'react';
import videoSc from '../../assets/videos/alidoorf-video.mp4'
import videoPre from '../../assets/images/video-pre.jpg'
import HomeChatUs from "./HomeChatUs";

const Home = () => {

    const [chatUsBtn, setChatUsBtn] = useState(false)

    return (
        <div className='home'>
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
                    <div className="subtitle before fw500">
                        <span className='txt'>Официальный сайт фабрики</span>
                    </div>
                    <h1 className='title mt1'>
                        <span className='txt'>23 года</span>
                        на рынке дверей
                    </h1>
                    <a className='tel before fz20' href="tel:+998">
                        <i className="fa-solid fa-square-phone icon"/>
                        <span className='txt'>+998 33 001 22 23</span>
                    </a>
                </div>
            </div>
            <HomeChatUs chatUsBtn={chatUsBtn} />
        </div>
    );
};

export default Home