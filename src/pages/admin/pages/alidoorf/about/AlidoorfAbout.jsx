import '../Alidoorf.scss'
import React, {useState} from 'react'
import AboutItem from "./AboutItem";
import AboutHero from "./hero/AboutHero";
import AboutHeroStaticText from "./hero/AboutHeroStaticText";
import AboutHeroBtn from "./hero/AboutHeroBtn";
import DoorsTitles from "./doors/DoorsTitles";
import DoorsImgTexts from "./doors/DoorsImgTexts";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";

const AlidoorfAbout = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className='ali-about admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf About Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section texts:</div>
                <AboutHero />

                <div>
                    <AboutHeroStaticText />
                    <form className='form'>
                        <span className='title fw500 fz18 mb1'>Animation texts (with ','):</span>
                        <label>
                            <span className='txt'>Ru</span>
                            <textarea
                                className='admin-inp'
                                placeholder='Texts ru . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            <textarea
                                className='admin-inp'
                                placeholder='Texts en . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            <textarea
                                className='admin-inp'
                                placeholder='Texts uz . . .'
                            />
                        </label>
                        <button className='admin-btn'>Submit</button>
                    </form>
                </div>

                <AboutHeroBtn />
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Doors section texts:</div>
                <div>
                    <DoorsTitles />
                    <form className='form'>
                        <span className='title fw500 fz18 mb1'>Image:</span>
                        <label>
                            <input
                                className='admin-inp'
                                type="file"
                            />
                        </label>
                        <button className='admin-btn'>Submit</button>
                    </form>
                </div>

                <DoorsImgTexts />
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Facts section texts:</div>
                <ul className='ali-about__list grid'>
                    <li className="item item__link plus grid grid-center">
                        <button className='plus__btn' onClick={() => setModal(true)}>
                            <i className="fa-solid fa-plus"/>
                        </button>
                    </li>
                    <AboutItem />
                    <AboutItem />
                </ul>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form">
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
                            <label>
                                <span className='title d-block fw500 fz18 mb1'>Image:</span>
                                <input
                                    className='admin-inp'
                                    type="file"
                                />
                            </label>
                            <div>
                                <span className='title fw500 fz18 mb1'>Title:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                    />
                                </label>
                            </div>
                            <button className='admin-btn'>Submit</button>
                        </form>
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default AlidoorfAbout
