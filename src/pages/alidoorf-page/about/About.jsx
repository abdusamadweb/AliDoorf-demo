import React from 'react'
import AboutMain from "./hero/AboutMain";
import AboutTexts from "./texts/AboutTexts";
import AboutFacts from "./facts/AboutFacts";
import Contact from "../main/contact/Contact";
import Instagram from "./instagram/Instagram";

const About = () => {
    return (
        <div className='about-page'>
            <AboutMain />
            <AboutTexts />
            <AboutFacts />
            <Instagram />
            <Contact />
        </div>
    )
}

export default About