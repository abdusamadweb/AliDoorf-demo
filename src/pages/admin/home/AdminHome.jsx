import './AdminHome.scss'
import React from 'react'

const AdminHome = () => {
    return (
        <div className='admin admin-page py2'>
            <div className='admin__inner'>
                <div className='admin__title fw500 mb3'>Welcome to admin !</div>
                <div className='content'>
                    <div className='content__subtitle fz22 fw500 mb2'>Contacts:</div>
                    <form className='content__form'>
                        <label>
                            <span className='txt'>Global phone number:</span>
                            <input
                                className='admin-inp'
                                type="tel"
                                placeholder='Number . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>Global email:</span>
                            <input
                                className='admin-inp'
                                type="tel"
                                placeholder='Email . . .'
                            />
                        </label>
                        <label>
                            <span className='txt'>Global address:</span>
                            <input
                                className='admin-inp'
                                type="tel"
                                placeholder='Address . . .'
                            />
                        </label>
                        <button className='admin-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminHome
