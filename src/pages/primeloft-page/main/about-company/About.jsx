import './About.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const About = () => {


    return (
        <div className='about page bg-cl py3'>
            <div className="container">
                <div className="head row no-wrap between align-center">
                    <div className="titles">
                        <span className='subtitle'>о компании</span>
                        <h2 className="title">Фабрика дверей ALIDOORF</h2>
                    </div>
                    <Link className='head__btn fw500 fz14' to='news'>Новости</Link>
                </div>
                <div className="body grid">
                    <div className="body__content pr1">
                        <h2 className='title fw600 fz22 mb2'>
                            Ведущий производитель дверей на рынке России и в странах Ближнего Зарубежья.
                            <br/>
                            Фабрика основана в 2000 году. Сегодня суммарная площадь предприятия составляет более 42 000 кв.м..
                        </h2>
                        <div className="descs">
                            <p className='desc'>
                                Двери Alidoorf — продукт европейского уровня, соответствуют ГОСТ 475-2016, ИСО 9001-2015, санитарно-эпидемиологическим и экологическим требованиям. На межкомнатные двери Фабрика предоставляет паспорт качества, гарантию 7 лет.
                            </p>
                            <p className="desc">
                                Компания, шагая в ногу со временем, постоянно инвестирует в собственные производственные мощности и внедряет инновационные технологии, собственные уникальные разработки, увеличивая ассортимент, объемы и качество выпускаемой продукции.
                            </p>
                            <p className="desc last fw500">
                                Многолетний труд по разработке и производству дверей, заслуженно отмечен наградами и премиями:
                            </p>
                            <ul className='descs__list row flex-column mb1'>
                                <li className='item'>
                                    <i className="fa-regular fa-circle-check icon"/>
                                    <span className='txt'>«Национальный знак качества»;</span>
                                </li>
                                <li className='item'>
                                    <i className="fa-regular fa-circle-check icon"/>
                                    <span className='txt'>«Национальный знак качества»;</span>
                                </li>
                                <li className='item'>
                                    <i className="fa-regular fa-circle-check icon"/>
                                    <span className='txt'>«Национальный знак качества»;</span>
                                </li>
                                <li className='item'>
                                    <i className="fa-regular fa-circle-check icon"/>
                                    <span className='txt'>«Национальный знак качества»;</span>
                                </li>
                                <li className='item'>
                                    <i className="fa-regular fa-circle-check icon"/>
                                    <span className='txt'>«Национальный знак качества»;</span>
                                </li>
                            </ul>
                        </div>
                        <Link className='btn fw500' to='/about'>Подробнее...</Link>
                    </div>
                    <div className="body__numbers">
                        <div className='wrapper mb3'>
                            <span className='number'>23</span>
                            <span className='title fw500'>ГОДА</span>
                            <span className='title'>НА РЫНКЕ ДВЕРЕЙ</span>
                        </div>
                        <div className='wrapper'>
                            <span className='number number2'>7</span>
                            <span className='title fw500'>ГОДА</span>
                            <span className='title'>НА РЫНКЕ ДВЕРЕЙ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
