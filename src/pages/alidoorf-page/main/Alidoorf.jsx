import React from 'react'
import Hero from "../../home/hero/Hero";
import About from "./about-company/About";
import Tech from "./technogies/Tech";
import News from "./news/News";
import Contact from "./contact/Contact";

const Alidoorf = ({ lang, type }) => {

    return (
        <div>
            <Hero lang={lang} />
            <About lang={lang} type={type} />
            <Tech lang={lang} type={type} />
            <News lang={lang} type={type} main={false} />
            <Contact lang={lang} type={type} />
        </div>
    )
}

export default Alidoorf
