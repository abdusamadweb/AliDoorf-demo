import React from 'react';
import Hero from "./hero/Hero";
import Direction from "./direction/Direction";
import News from "../alidoorf-page/main/news/News";
import Instagram from "../alidoorf-page/about/instagram/Instagram";
import Contact from "../alidoorf-page/main/contact/Contact";

const Home = ({ lang }) => {

    return (
        <main>
            <Hero lang={lang} />
            <Direction lang={lang} />
            <News lang={lang} />
            <Instagram lang={lang} />
            <Contact lang={lang} />
        </main>
    );
};

export default Home