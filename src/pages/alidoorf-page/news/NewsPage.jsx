import React from 'react'
import NewsHero from "./hero/NewsHero";
import NewsSection from "./news-section/NewsSection";


const NewsPage = () => {
    return (
        <div className='news-page'>
            <NewsHero />
            <NewsSection />
        </div>
    )
}

export default NewsPage
