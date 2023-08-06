import React, {useState} from 'react'
import news1 from "../../../../../assets/images/news1.jpg";
import {Link} from "react-router-dom";

const NewsItem = () => {

    const [modal, setModal] = useState(false)

    return (
        <li className='item'>
            <img className='item__img' src={news1} alt="img"/>
            <div className='item__wrapper'>
                <span className="item__time">06 ИЮЛ 2023</span>
                <h4 className="item__title">Двери SOFFITO — лучшее решение для лаконичного интерьера</h4>
                <p className='item__desc'>
                    Тонко чувствуя современные тенденции, мы разработали коллекцию дверей SOFFITO, объединяющую популярные формы дверей. Особое вниманием уделили лаконичной фрезеровке. Выбирая гладкие покрытия Софт Вы...
                </p>
                <span className='item__btn'>ПОДРОБНЕЕ</span>
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
                            <label>
                                <span className='title fw500 fz18 mb1'>Image:</span>
                                <input
                                    className='admin-inp'
                                    type="file"
                                />
                            </label>
                            <label>
                                <span className='title fw500 fz18 mb1'>Date:</span>
                                <input
                                    className='admin-inp'
                                    type="date"
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
                            <div>
                                <span className='title fw500 fz18 mb1'>Description:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <textarea
                                        className='admin-inp'
                                        placeholder='Text . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <textarea
                                        className='admin-inp'
                                        placeholder='Text . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <textarea
                                        className='admin-inp'
                                        placeholder='Text . . .'
                                    />
                                </label>
                            </div>
                            <div>
                                <span className='title fw500 fz18 mb1'>Button:</span>
                                <label>
                                    <span className='txt'>Ru:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>En:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
                                    />
                                </label>
                                <label>
                                    <span className='txt'>Uz:</span>
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder='Btn . . .'
                                    />
                                </label>
                            </div>
                        </form>
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default NewsItem
