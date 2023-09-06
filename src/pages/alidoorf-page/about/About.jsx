import React from 'react'
import AboutMain from "./hero/AboutMain";
import AboutTexts from "./texts/AboutTexts";
import AboutFacts from "./facts/AboutFacts";
import Contact from "../main/contact/Contact";

const About = ({ lang, type }) => {
    return (
        <div className='about-page'>
            <AboutMain lang={lang} type={type} />
            <AboutTexts lang={lang} type={type} />
            <AboutFacts lang={lang} type={type} />
            {/*<Instagram lang={lang} type={type} />*/}
            <Contact lang={lang} />
        </div>
    )
}

export default About