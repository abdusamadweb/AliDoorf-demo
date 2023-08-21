import '../Alidoorf.scss'
import React, {useState} from 'react'
import HomeSliderItem from "./slider/HomeSliderItem";
import HomeHero from "./hero/HomeHero";
import ContentTitles from "./content/ContentTitles";
import ContentNumbers from "./content/ContentNumbers";
import TechTitles from "./tech/TechTitles";
import NewsTitles from "./news/NewsTitles";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";
import HomeSliderList from "./slider/HomeSliderList";
import ContentList from "./content/ContentList";

const AlidoorfHome = () => {

    return (
        <div className='ali admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf Page</div>
                <AccessPage />
            </div>
            <Parallax />


            <HomeHero />

            <div>
                <div className='admin-main__subtitle fw500 fz22 mb2'>Content texts:</div>
                <ContentTitles />

                <ContentList />

                <ContentNumbers />
            </div>

            <div>
                <TechTitles />

                <HomeSliderList />
            </div>

            <NewsTitles />
        </div>
    )
}

export default AlidoorfHome
