import './Colors.scss'
import React from 'react'
import SecondaryColor1 from "./other/SecondaryColor1";
import PrimaryColor from "./primary/PrimaryColor";

const Colors = () => {


    return (
        <div className='colors admin-main admin-page'>
            <div className='colors__title fw500 fz24 mb3'>Colors page</div>
            <PrimaryColor />

            <SecondaryColor1 />
        </div>
    )
}

export default Colors
