import React, {useEffect} from 'react'
import Hero from "../../home/hero/Hero";
import About from "./about-company/About";
import Tech from "./technogies/Tech";
import News from "./news/News";
import Contact from "./contact/Contact";

const Alidoorf = ({lang, type}) => {


    useEffect(() => {
        const title =
            lang === 'uz' ?
                (type === 'ali' ? 'Eshiklar' : type === 'prime' ? 'Loft Mebel' : 'Mebel')
                : lang === 'ru' ?
                    (type === 'ali' ? 'Двери' : type === 'prime' ? 'Лофт Мебель' : 'Мебель')
                    : (type === 'ali' ? 'Doors' : type === 'prime' ? 'Loft Mebel' : 'Mebel')

        document.title = `${title} - ALIDOORF`
        return () => {
            document.title = 'ALIDOORF'
        }
    }, [lang])


    return (
        <div>
            <Hero lang={lang}/>
            <About lang={lang} type={type}/>
            <Tech lang={lang} type={type}/>
            <News lang={lang} type={type} main={false}/>
            <Contact lang={lang} type={type}/>
        </div>
    )
}

export default Alidoorf
