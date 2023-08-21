import '../Alidoorf.scss'
import React from 'react'
import HeroTitle from "./hero/HeroTitle";
import NewsTitles from "./news/NewsTitles";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";
import NewsList from "./news/news-list/NewsList";
import HeroImg from "./hero/HeroImg";

const AlidoorfNews = () => {


    return (
        <div className='ali-news news admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf News Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <div>
                <HeroTitle />
                <HeroImg />
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>News section texts:</div>
                <NewsTitles />

                <NewsList />
            </div>
        </div>
    )
}

export default AlidoorfNews
