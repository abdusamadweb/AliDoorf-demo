import '../Alidoorf.scss'
import React, {useState} from 'react'
import AlidoorfHomeSlider from "./AlidoorfHomeSlider";
import HomeHero from "./hero/HomeHero";
import ContentTitles from "./content/ContentTitles";
import ContentNumbers from "./content/ContentNumbers";
import TechTitles from "./tech/TechTitles";
import NewsTitles from "./news/NewsTitles";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";

const AlidoorfHome = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className='ali admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf Page</div>
                <AccessPage />
            </div>
            <Parallax />


            <HomeHero />

            <div>
                <div className='admin-main__subtitle fw500 fz22 mb2'>Content texts:</div>
                <ContentTitles />

                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Items (each item with ','):</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Item ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Item en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Item uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>

                <ContentNumbers />
            </div>

            <div>
                <TechTitles />

                <div>
                    <div className='admin-main__subtitle fw500 fz20 mb2'>Slider:</div>
                    <ul className='ali__list mb3'>
                        <li className="item item__link plus grid grid-center">
                            <button className='plus__btn' onClick={() => setModal(true)}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        <AlidoorfHomeSlider />
                    </ul>
                </div>
            </div>

            <NewsTitles />

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

export default AlidoorfHome
