import '../Alidoorf.scss'
import React, {useState} from 'react'
import CatalogItem from "./CatalogItem";
import CatalogTitle from "./home/CatalogTitle";
import Parallax from "./parallax/Parallax";
import AccessPage from "./access-page/AccessPage";

const AlidoorfCatalog = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className='ali-catalog catalog admin-main admin-page'>
            <div className='row between align-center mb3'>
                <div className='admin-main__title fw500 fz24'>Alidoorf Catalog Page</div>
                <AccessPage />
            </div>
            <Parallax />

            <CatalogTitle />

            <ul className='catalog__list grid'>
                <li className="item item__link plus grid grid-center">
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                <CatalogItem />
            </ul>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <form className="form">
                            <span className='title d-block center fw500 fz22 mb2'>Add</span>
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
        </div>
    )
}

export default AlidoorfCatalog
