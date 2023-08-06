import React from 'react'

const AlidoorfHomeSlider = () => {



    return (
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
    )
}

export default AlidoorfHomeSlider
