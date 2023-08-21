import React from 'react'
import AboutMain from "./hero/AboutMain";
import AboutTexts from "./texts/AboutTexts";
import AboutFacts from "./facts/AboutFacts";
import Contact from "../main/contact/Contact";
import Instagram from "./instagram/Instagram";

const About = ({ lang }) => {
    return (
        <div className='about-page'>
            <AboutMain lang={lang} />
            <AboutTexts lang={lang} />
            <AboutFacts lang={lang} />
            <Instagram lang={lang} />
            <Contact lang={lang} />
        </div>
    )
}

export default About