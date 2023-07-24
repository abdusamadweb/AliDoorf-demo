import './Direction.scss'
import React from 'react'
import {Link} from "react-router-dom"
import dir1 from '../../../assets/images/direction1.jpg'
import dir2 from '../../../assets/images/direction2.jpg'
import dir3 from '../../../assets/images/direction3.jpg'

const Direction = () => {
    return (
        <div className='direction page bg-cl'>
            <div className="container">
                <div className="direction__inner">
                    <div className="direction__titles mb2">
                        <span className='subtitle mb1'>ooo forever quality</span>
                        <h2 className='title'>наши направление</h2>
                    </div>
                    <div className="direction__content row no-wrap">
                        <Link className='item' to='/alidoorf'>
                            <img className='item__img' src={dir1} alt="bg"/>
                            <h4 className='item__title center-absolute'>двери</h4>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>alidoorf</h3>
                                <p className='desc'>Произвоство дверей</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                        <Link className='item' to='/primeloft'>
                            <img className='item__img' src={dir2} alt="bg"/>
                            <h4 className='item__title center-absolute'>двери</h4>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>alidoorf</h3>
                                <p className='desc'>Произвоство дверей</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                        <Link className='item' to='/mebel'>
                            <img className='item__img' src={dir3} alt="bg"/>
                            <h4 className='item__title center-absolute'>двери</h4>
                            <div className="item__hover center-absolute">
                                <h3 className='title'>alidoorf</h3>
                                <p className='desc'>Произвоство дверей</p>
                            </div>
                            <div className="bg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Direction
