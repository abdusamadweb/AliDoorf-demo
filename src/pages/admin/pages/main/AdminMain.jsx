import './AdminMain.scss'
import React from 'react'
import MainHero from "./hero/MainHero";
import MainDirection from "./direction/MainDirection";
import AliDesc from "./direction/alidoorf/AliDesc";
import AliSpace from "./direction/alidoorf/AliSpace";
import AliImg from "./direction/alidoorf/AliImg";
import PrimeDesc from "./direction/primeloft/PrimeDesc";
import PrimeSpace from "./direction/primeloft/PrimeSpace";
import PrimeImg from "./direction/primeloft/PrimeImg";
import MebelDesc from "./direction/mebel/MebelDesc";
import MebelSpace from "./direction/mebel/MebelSpace";
import MebelImg from "./direction/mebel/MebelImg";
import Parallax from "./parallax/Parallax";

const AdminMain = () => {


    return (
        <div className='admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Main Page</div>
            <Parallax />

            {/*<MainHeroVideo />*/}

            <MainHero />

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Direction section texts:</div>
                <MainDirection />

                {/* alidoorf */}
                <AliDesc />
                <AliSpace />
                <AliImg />

                {/* primeloft */}
                <PrimeDesc />
                <PrimeSpace />
                <PrimeImg />

                {/* mebel */}
                <MebelDesc />
                <MebelSpace />
                <MebelImg />
            </div>
        </div>
    )
}

export default AdminMain
