import React from 'react'

const AliImg = () => {
    return (
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
    )
}

export default AliImg
