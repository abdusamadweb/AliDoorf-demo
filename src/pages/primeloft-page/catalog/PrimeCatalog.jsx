import './Catalog.scss'
import React from 'react'
import {Link} from "react-router-dom";
import catalog1 from '../../../assets/images/catalog1.jpg'
import catalog2 from '../../../assets/images/catalog2.jpg'
import catalog3 from '../../../assets/images/catalog3.jpg'
import catalog4 from '../../../assets/images/catalog4.jpg'

const PrimeCatalog = () => {
    return (
        <div className='catalog page bg-cl pt2 pb3'>
            <div className="container">
                <div className="catalog__inner">
                    <h1 className="catalog__title">Каталог продукции</h1>
                    <ul className='catalog__list grid'>
                        <li className="item">
                            <Link className='item__link' to="/">
                                <img className='img' src={catalog1} alt="img"/>
                                <span className='txt'>Межкомнатные двери</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link className='item__link' to="/">
                                <img className='img' src={catalog2} alt="img"/>
                                <span className='txt'>Складская программа</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link className='item__link' to="/">
                                <img className='img' src={catalog3} alt="img"/>
                                <span className='txt'>Межкомнатные двери</span>
                            </Link>
                        </li>
                        <li className="item">
                            <Link className='item__link' to="/">
                                <img className='img' src={catalog4} alt="img"/>
                                <span className='txt'>Складская программа</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PrimeCatalog
