import React, {useState} from 'react'

const CatalogItem = () => {

    const [modal, setModal] = useState(false)

    return (
        <li className="item">
            <div className='item__link'>
                <img className='img' src={null} alt="img"/>
                <span className='txt'>Межкомнатные двери</span>
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
                            <label>
                                <span className='title d-block fw500 fz18 mb1'>Image:</span>
                                <input
                                    className='admin-inp'
                                    type="file"
                                />
                            </label>
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

export default CatalogItem
