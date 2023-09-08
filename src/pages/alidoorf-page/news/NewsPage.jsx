import React, {useEffect} from 'react'
import NewsHero from "./hero/NewsHero";
import NewsSection from "./news-section/NewsSection";


const NewsPage = ({ lang, type }) => {


    useEffect(() => {
        const title = lang === 'uz' ? 'Yangiliklar' : lang === 'ru' ? 'Новости' : 'News'
        document.title = `${title} - ALIDOORF`
        return () => {
            document.title = 'ALIDOORF'
        }
    }, [lang])


    return (
        <div className='news-page'>
            <NewsHero lang={lang} type={type} />
            <NewsSection lang={lang} type={type} />
        </div>
    )
}

export default NewsPage
