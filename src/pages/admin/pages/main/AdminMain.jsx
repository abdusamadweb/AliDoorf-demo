import './AdminMain.scss'
import React from 'react'

const AdminMain = () => {
    return (
        <div className='admin-main admin-page'>
            <div className='admin-main__title fw500 fz24 mb3'>Main Page</div>
            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Hero section texts:</div>
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
            <div>
                <div className='admin-main__subtitle fw500 fz20 mb2'>Direction section texts:</div>
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

                {/* alidoorf */}
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Alidoorf desc:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Alidoorf space:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Alidoorf img:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="file"
                            placeholder='Img ru . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>

                {/* primeloft */}
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Primeloft desc:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Primeloft space:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Primeloft img:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="file"
                            placeholder='Img ru . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>

                {/* mebel */}
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Mebel desc:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Desc uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Mebel space:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space ru . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>En</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space en . . .'
                        />
                    </label>
                    <label>
                        <span className='txt'>Uz</span>
                        <input
                            className='admin-inp'
                            type="text"
                            placeholder='Space uz . . .'

                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
                <form className='form'>
                    <span className='title fw500 fz18 mb1'>Mebel img:</span>
                    <label>
                        <span className='txt'>Ru</span>
                        <input
                            className='admin-inp'
                            type="file"
                            placeholder='Img ru . . .'
                        />
                    </label>
                    <button className='admin-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AdminMain
