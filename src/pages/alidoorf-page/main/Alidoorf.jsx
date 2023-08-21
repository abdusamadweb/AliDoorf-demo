import React from 'react'
import Hero from "../../home/hero/Hero";
import About from "./about-company/About";
import Tech from "./technogies/Tech";
import News from "./news/News";
import Contact from "./contact/Contact";

const Alidoorf = ({ lang }) => {

    return (
        <div>
            <Hero lang={lang} />
            <About lang={lang} />
            <Tech lang={lang} />
            <News lang={lang} />
            <Contact lang={lang} />
        </div>
    )
}

export default Alidoorf
