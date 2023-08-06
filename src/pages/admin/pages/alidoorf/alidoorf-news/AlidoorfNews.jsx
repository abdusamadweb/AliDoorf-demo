import '../Alidoorf.scss'
import React from 'react'
import about1 from "../../../../../assets/images/admin/alidoorf-about1.png";
import about2 from "../../../../../assets/images/admin/alidoorf-about2.png";
import about3 from "../../../../../assets/images/admin/alidoorf-about3.png";
import about4 from "../../../../../assets/images/admin/alidoorf-about4.png";
import NewsItem from "./NewsItem";

const AlidoorfNews = () => {
    return (
        <div className='ali-news news admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Alidoorf News Page</div>
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
            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>News section texts:</div>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Subtitle:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Subtitle ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Subtitle en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Subtitle uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Title:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Title ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Title en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Title uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>

                <div>
                    <div className='admin-main__subtitle fw500 fz20 mb2'>News items:</div>
                    <ul className='news__list grid'>
                        <li className='item plus'>
                            <button className='plus__btn'>
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
        </div>
    )
}

export default AlidoorfNews
