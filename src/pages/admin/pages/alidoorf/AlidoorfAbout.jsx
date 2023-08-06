import './Alidoorf.scss'
import React from 'react'
import about1 from '../../../../assets/images/admin/alidoorf-about1.png'
import about2 from '../../../../assets/images/admin/alidoorf-about2.png'
import about3 from '../../../../assets/images/admin/alidoorf-about3.png'
import about4 from '../../../../assets/images/admin/alidoorf-about4.png'

const AlidoorfAbout = () => {
    return (
        <div className='ali-about admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Alidoorf About Page</div>
            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section texts:</div>
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
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Animation static text:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
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
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Button text:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <textarea
                            className='admin-inp'
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Doors section texts:</div>
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

            <div>
                <form className='form'>
                    <img className='img' src={about1} alt="img"/>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <img className='img' src={about2} alt="img"/>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <img className='img' src={about3} alt="img"/>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <img className='img' src={about4} alt="img"/>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>

            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Facts section texts:</div>
                <form className='form'>
                    <div>
                        <span className='title fw500 fz18 mb1'>Item 1:</span>
                        <label>
                            <input
                                className='admin-inp'
                                type="file"
                            />
                        </label>
                        <label>
                            <span className='txt'>Ru</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder='Txt ru . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder='Txt en . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            <input
                                className='admin-inp'
                                type="text"
                                placeholder='Txt uz . . .'
                            />
                        </label>
                    </div>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AlidoorfAbout
