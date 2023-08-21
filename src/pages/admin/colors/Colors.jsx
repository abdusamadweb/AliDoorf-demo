import './Colors.scss'
import React from 'react'
import SecondaryColor1 from "./other/SecondaryColor1";
import PrimaryColor from "./primary/PrimaryColor";
import SecondaryColor2 from "./other/SecondaryColor2";

const Colors = () => {


    return (
        <div className='colors admin-main admin-page'>
            <div className='colors__title fw500 fz24 mb3'>Colors page</div>
            <PrimaryColor />

            <SecondaryColor1 />
            <SecondaryColor2 />
        </div>
    )
}

export default Colors
