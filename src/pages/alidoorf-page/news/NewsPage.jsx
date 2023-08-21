import React from 'react'
import NewsHero from "./hero/NewsHero";
import NewsSection from "./news-section/NewsSection";


const NewsPage = ({ lang }) => {
    return (
        <div className='news-page'>
            <NewsHero lang={lang} />
            <NewsSection lang={lang} />
        </div>
    )
}

export default NewsPage
