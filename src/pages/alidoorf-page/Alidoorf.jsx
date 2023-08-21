import React from 'react'
import Hero from "../home/hero/Hero";
import About from "./main/about-company/About";
import Tech from "./main/technogies/Tech";
import News from "./main/news/News";
import Contact from "./main/contact/Contact";

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
