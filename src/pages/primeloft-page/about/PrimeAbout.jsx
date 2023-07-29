import React from 'react'
import AboutMain from "./hero/AboutMain";
import AboutTexts from "./texts/AboutTexts";
import AboutFacts from "./facts/AboutFacts";
import Contact from "../main/contact/Contact";

const PrimeAbout = () => {
    return (
        <div className='about-page'>
            <AboutMain />
            <AboutTexts />
            <AboutFacts />
            <Contact />
        </div>
    )
}

export default PrimeAbout