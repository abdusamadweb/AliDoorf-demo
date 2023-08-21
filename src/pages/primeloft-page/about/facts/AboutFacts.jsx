
import React from 'react'
import factsImg1 from '../../../../assets/images/about-facts1.png'
import factsImg2 from '../../../../assets/images/about-facts2.png'

const AboutFacts = () => {
    return (
        <div className='facts page bg-cl'>
            <div className="container">
                <div className="facts__inner">
                    <div className="titles">
                        <span className="subtitle">Преимущества</span>
                        <h2 className="title">
                            Конкурентные преимущества
                            Фабрики дверей Alidoorf
                        </h2>
                    </div>
                    <ul className="facts__body grid">
                        <li className='item'>
                            <img className='item__img' src={factsImg1} alt="img"/>
                            <h3 className="item__txt">КРУПНОЕ ПРЕДПРИЯТИЕ 42 000 кв.м</h3>
                        </li>
                        <li className='item'>
                            <img className='item__img' src={factsImg2} alt="img"/>
                            <h3 className="item__txt">НАГРАДЫ И СЕРТИФИКАТЫ
                                18</h3>
                        </li>
                        <li className='item'>
                            <img className='item__img' src={factsImg1} alt="img"/>
                            <h3 className="item__txt">СТАБИЛЬНОСТЬ - ДОВЕРИЕ 23 года производим двери</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutFacts
