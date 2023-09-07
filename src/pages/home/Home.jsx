import React from 'react';
import Hero from "./hero/Hero";
import Direction from "./direction/Direction";
import Contact from "../alidoorf-page/main/contact/Contact";
import News from "./news/News";

const Home = ({ lang, type }) => {

    return (
        <main>
            <Hero lang={lang} />
            <Direction lang={lang} />
            <News lang={lang} type={type} />
            {/*<Instagram lang={lang} />*/}
            <Contact lang={lang} />
        </main>
    );
};

export default Home