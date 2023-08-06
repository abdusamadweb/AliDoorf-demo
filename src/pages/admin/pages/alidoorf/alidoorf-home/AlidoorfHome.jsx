import '../Alidoorf.scss'
import React from 'react'
import AlidoorfHomeSlider from "./AlidoorfHomeSlider";

const AlidoorfHome = () => {
    return (
        <div className='ali admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Alidoorf Page</div>
            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Home section texts:</div>
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

                <div className='admin-main__subtitle fw500 fz20 mb2'>Content texts:</div>
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
                    <span className='title fw500 fz18 mb1'>Description:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Description ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Description en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Description uz . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Bold text:</span>
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

                <div className='admin-main__subtitle fw500 fz20 mb2'>Content numbers:</div>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Year of market:</span>
                    <label>
                        <span className='txt'>Market:</span>
                        <input
                            className='admin-inp'
                            type="number"
                            placeholder='Year . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Text:</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Year of guarantee:</span>
                    <label>
                        <span className='txt'>Guarantee:</span>
                        <input
                            className='admin-inp'
                            type="number"
                            placeholder='Year . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Text:</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Text . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>
            <div>
                <div className='admin-main__title fw500 fz24 mb2'>Technologies section:</div>
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

                <div className='admin-main__subtitle fw500 fz20 mb2'>Slider:</div>
                <AlidoorfHomeSlider />
            </div>
            <div>
                <div className='admin-main__title fw500 fz24 mb2'>News section:</div>
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
            </div>
        </div>
    )
}

export default AlidoorfHome
