import React, {useState} from 'react'

const MenuLinkItem = ({ num }) => {

    const [modal, setModal] = useState(false)

    return (
        <li className='item'>
            <span className='mt1 mb1'>{ num+1 }</span>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Link:</span>
                <span className='item__txt'>{ 'nmadaksdj as jblakr' }</span>
            </div>
            <div className='row no-wrap between'>
                <span className='fw500 mr1'>Title:</span>
                <span className='item__txt'>{ 'nmadr' }</span>
            </div>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del'>Delete</button>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form">
                            <span className='title d-block center fw500 fz22 mb2'>Edit</span>
                            <div>
                                <span className='title fw500 fz18 mb1'>Link:</span>
                                <label>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Title . . .'
                                        defaultValue='/'
                                    />
                                </label>
                            </div>
                            <div>
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
                            <button className='admin-btn'>Submit</button>
                        </form>
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default MenuLinkItem
