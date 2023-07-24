import './News.scss'
import React from 'react'
import {Link} from "react-router-dom";
import news1 from '../../../assets/images/news1.jpg'
import news2 from '../../../assets/images/new2.jpg'
import news3 from '../../../assets/images/news3.jpg'

const News = () => {
    return (
        <div className='news page bg-cl pt2 pb3'>
            <div className="container">
                <div className="titles">
                    <span className="subtitle">Новости</span>
                    <h2 className="title">Последние новости</h2>
                </div>
                <ul className='news__list grid'>
                    <li className='item'>
                        <img className='item__img' src={news1} alt="img"/>
                        <span className="item__time">06 ИЮЛ 2023</span>
                        <h4 className="item__title">Двери SOFFITO — лучшее решение для лаконичного интерьера</h4>
                        <p className='item__desc'>
                            Тонко чувствуя современные тенденции, мы разработали коллекцию дверей SOFFITO, объединяющую популярные формы дверей. Особое вниманием уделили лаконичной фрезеровке. Выбирая гладкие покрытия Софт Вы...
                        </p>
                        <Link className='item__btn' to=''>ПОДРОБНЕЕ</Link>
                    </li>
                    <li className='item'>
                        <img className='item__img' src={news2} alt="img"/>
                        <span className="item__time">06 ИЮЛ 2023</span>
                        <h4 className="item__title">Равенна — классика и тренд в одной коллекции</h4>
                        <p className='item__desc'>
                            Тонко чувствуя современные тенденции, мы разработали коллекцию дверей SOFFITO, объединяющую популярные формы дверей. Особое вниманием уделили лаконичной фрезеровке. Выбирая гладкие покрытия Софт Вы...
                        </p>
                        <Link className='item__btn' to=''>ПОДРОБНЕЕ</Link>
                    </li>
                    <li className='item'>
                        <img className='item__img' src={news3} alt="img"/>
                        <span className="item__time">06 ИЮЛ 2023</span>
                        <h4 className="item__title">Двери SOFFITO — лучшее решение для лаконичного интерьера</h4>
                        <p className='item__desc'>
                            Тонко чувствуя современные тенденции, мы разработали коллекцию дверей SOFFITO, объединяющую популярные формы дверей. Особое вниманием уделили лаконичной фрезеровке.
                        </p>
                        <Link className='item__btn' to=''>ПОДРОБНЕЕ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default News
