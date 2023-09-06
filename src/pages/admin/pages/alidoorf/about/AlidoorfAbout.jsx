import '../Alidoorf.scss'
import React from 'react'
import AboutHero from "./hero/AboutHero";
import AboutHeroStaticText from "./hero/AboutHeroStaticText";
import AboutHeroBtn from "./hero/AboutHeroBtn";
import DoorsTitles from "./doors/DoorsTitles";
import DoorsImgTexts from "./doors/DoorsImgTexts";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";
import AboutFacts from "./facts/AboutFacts";
import AboutHeroImg from "./hero/AboutHeroImg";
import DoorsImg from "./doors/DoorsImg";
import FactsList from "./facts/FactsList";
import AboutHeroAnimationText from "./hero/AboutHeroAnimationText";

const AlidoorfAbout = () => {

    return (
        <div className='ali-about admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf About Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section texts:</div>
                <AboutHero />

                <AboutHeroImg />

                <div>
                    <AboutHeroStaticText />
                    <AboutHeroAnimationText />
                </div>

                <AboutHeroBtn />
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Doors section texts:</div>
                <div>
                    <DoorsTitles />
                    <DoorsImg />
                </div>

                <DoorsImgTexts />
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Facts section texts:</div>
                <AboutFacts />

                <FactsList />
            </div>
        </div>
    )
}

export default AlidoorfAbout
