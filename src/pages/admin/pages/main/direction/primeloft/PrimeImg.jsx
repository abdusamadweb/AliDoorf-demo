import React from 'react'

const PrimeImg = () => {
    return (
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
    )
}

export default PrimeImg
