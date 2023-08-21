import React from 'react';
import Hero from "./hero/Hero";
import Direction from "./direction/Direction";

const Home = ({ lang }) => {

    return (
        <main>
            <Hero lang={lang} />
            <Direction lang={lang} />
        </main>
    );
};

export default Home