import React from 'react'
import NewsHero from "./hero/NewsHero";
import NewsSection from "./news-section/NewsSection";


const NewsPage = ({ lang, type }) => {
    return (
        <div className='news-page'>
            <NewsHero lang={lang} type={type} />
            <NewsSection lang={lang} type={type} />
        </div>
    )
}

export default NewsPage
