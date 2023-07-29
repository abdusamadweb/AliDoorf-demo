import './AboutTexts.scss'
import React from 'react'
import {Link} from "react-router-dom";
import txtsImg from '../../../../assets/images/about-txts.jpg'

const AboutTexts = () => {
    return (
        <div className='texts page bg-cl'>
            <div className="container">
                <div className="texts__inner grid px2">
                    <div className="diver">
                        <img className='img' src={txtsImg} alt="img"/>
                        <div className='margin'>
                            <p className='desc mb3'>
                                Если Вам нужно купить двери оптом и в розницу по всей России – обратитесь к нам! И пусть каждая купленная у нас дверь принесёт в Ваш мир уют и благополучие!
                            </p>
                            <div className='row no-wrap align-center mb3'>
                                <i className="fa-solid fa-location-dot icon"/>
                                <div className='desc'>
                                    ПЕРВАЯ ФАБРИКА
                                    <br/>
                                    Чувашия, Чебоксарский район, с. Чемурша, Вятский проезд, 4
                                </div>
                            </div>
                            <div className="row no-wrap align-center mb2">
                                <i className="fa-solid fa-mobile-screen-button icon"/>
                                <a className='link' href="tel: +998">+998 33 001 22 23</a>
                            </div>
                            <div className="row no-wrap align-center">
                                <i className="fa-solid fa-envelope icon"/>
                                <a className='link' href="mailto: nmadr@ma.co">nmadr@ma.co</a>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper py3'>
                        <div className="titles">
                            <div className='txt'>
                                ВЕДУЩИЙ ПРОИЗВОДИТЕЛЬ ДВЕРЕЙ Нa РЫНКe РОССИИ И В СТРАНАХ БЛИЖНЕГО ЗАРУБЕЖЬЯ.
                            </div>
                            <h1 className="title fw300 pb2">Двери оптом</h1>
                        </div>
                        <h3 className="desc fw500 mb2">Фабрика основана в 2000 году. Сегодня суммарная площадь предприятия
                            составляет более 42 000 кв.м.</h3>
                        <p className='desc'>
                            Фабрика Geona – крупный и надежный производитель корпусной мебели и дверей. У компании три
                            фабрики в Чувашской республике – две в пригороде г. Чебоксары и одна в г. Новочебоксарск.
                            Мощности фабрики, современное оборудование, собственный оптовый склад и контроль каждого
                            этапа производства – ключевые параметры успеха.
                            <br/>
                            С 2000 года Geona поставляет в розницу и оптом двери всех разновидностей - входные,
                            межкомнатные, противопожарные. При производстве моделей учитываются интересы конечного
                            пользователя, современные тенденции и международные стандарты качества. Особенное внимание
                            производитель уделяет качеству и эстетике полотна – дверь фабрики впишется в любой проект и
                            станет его украшением. Все вместе это позволяет заказчикам с любыми запросами купить
                            недорогой и подходящий по всем параметрам товар.
                            <br/><br/>
                            При необходимости купить крупную партию опта можно обратиться к менеджеру, который
                            сориентирует по текущему наличию и рассчитает стоимость по заданным условиям.
                        </p>
                        <Link className='btn mt2' to='/catalog'>
                            посмотреть каталог
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTexts
