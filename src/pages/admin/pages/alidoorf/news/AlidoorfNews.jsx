import '../Alidoorf.scss'
import React, {useState} from 'react'
import NewsItem from "./NewsItem";
import HeroTitle from "./hero/HeroTitle";
import NewsTitles from "./news/NewsTitles";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";

const AlidoorfNews = () => {

    const [modal, setModal] = useState(false)


    return (
        <div className='ali-news news admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf News Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <div>
                <HeroTitle />
                <div>
                    <div className='admin-main__subtitle fw500 fz18 mb1'>Hero section background image:</div>
                    <form className='form'>
                        <div>
                            <label>
                                <input
                                    className='admin-inp'
                                    type="file"
                                />
                            </label>
                        </div>
                        <button className='admin-btn'>Submit</button>
                    </form>
                </div>
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>News section texts:</div>
                <NewsTitles />

                <div>
                    <div className='admin-main__subtitle fw500 fz20 mb2'>News items:</div>
                    <ul className='news__list grid'>
                        <li className='item plus'>
                            <button className='plus__btn' onClick={() => setModal(true)}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </ul>
                </div>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form">
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
                            <div className='row no-wrap between g1'>
                                <label className='w50'>
                                    <span className='title d-block fw500 fz18 mb1'>Image:</span>
                                    <input
                                        className='admin-inp'
                                        type="file"
                                    />
                                </label>
                                <label className='w50'>
                                    <span className='title d-block fw500 fz18 mb1'>Date:</span>
                                    <input
                                        className='admin-inp'
                                        type="date"
                                    />
                                </label>
                            </div>
                            <div className='row no-wrap between g1'>
                                <div className='w50'>
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
                                <div className='w50'>
                                    <span className='title fw500 fz18 mb1'>Description:</span>
                                    <label>
                                        <span className='txt'>Ru:</span>
                                        <textarea
                                            className='admin-inp'
                                            placeholder='Text . . .'
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>En:</span>
                                        <textarea
                                            className='admin-inp'
                                            placeholder='Text . . .'
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Uz:</span>
                                        <textarea
                                            className='admin-inp'
                                            placeholder='Text . . .'
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <span className='title fw500 fz18 mb1'>Button:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
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

export default AlidoorfNews
