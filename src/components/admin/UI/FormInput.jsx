import './FormInput.scss'
import React from 'react'

const FormInput = ({  }) => {
    return (
        <label>
            <span className='txt'>Global address:</span>
            <input
                className='admin-inp'
                type="tel"
                placeholder='Address . . .'
            />
        </label>
    )
}

export default FormInput
