import './AdminMenu.scss'
import React, {useState} from 'react'
import MenuBgText from "./bg-txt/MenuBgText";
import AlidoorfHomeSlider from "../pages/alidoorf/home/AlidoorfHomeSlider";
import MenuLinkItem from "./links/MenuLinkItem";

const AdminMenu = () => {

    const [modal, setModal] = useState(false)


    return (
        <div className='menu admin-main admin-page'>
            <div className='menu__title fw500 fz24 mb3'>Menu</div>
            <MenuBgText />

            <div>
                <div>
                    <div className='menu__title fw500 fz22 mb2'>Alidoorf</div>
                    <ul className='ali__list mb3'>
                        <li className="item item__link plus grid grid-center">
                            <button className='plus__btn' onClick={() => setModal(true)}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        <MenuLinkItem />
                    </ul>
                </div>

                <div>
                    <div className='menu__title fw500 fz22 mb2'>Primeloft</div>
                    <ul className='ali__list mb3'>
                        <li className="item item__link plus grid grid-center">
                            <button className='plus__btn' onClick={() => setModal(true)}>
                                <i className="fa-solid fa-plus"/>
                            </button>
                        </li>
                        <MenuLinkItem />
                    </ul>
                </div>
            </div>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form">
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
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
        </div>
    )
}

export default AdminMenu
