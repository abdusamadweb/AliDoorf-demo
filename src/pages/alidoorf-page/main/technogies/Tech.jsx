import './Tech.scss'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import slider1 from '../../../../assets/images/slider1.jpg'
import slider2 from '../../../../assets/images/slider2.jpg'
import slider3 from '../../../../assets/images/slider3.jpg'
import slider4 from '../../../../assets/images/slider4.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import {Navigation, Pagination} from "swiper/modules";

const Tech = () => {
    return (
        <div className='tech page bg-cl pt2'>
            <div className="container">
                <div className="titles">
                    <span className='subtitle'>ТЕХНОЛОГИИ</span>
                    <h2 className="title">Системы открывания</h2>
                </div>
                <div className="slider no-copy">
                    <Swiper
                        loop={true}
                        navigation={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            1: {
                                slidesPerView: 1,
                            },
                            800: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="swiper"
                    >
                        <SwiperSlide>
                            <img className='slider__img' src={slider1} alt="img"/>
                            <h4 className='slider__txt'>Секрет</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider2} alt="img"/>
                            <h4 className='slider__txt'>Компланарный Моноблок</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider3} alt="img"/>
                            <h4 className='slider__txt'>Рото</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider4} alt="img"/>
                            <h4 className='slider__txt'>Барня</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider1} alt="img"/>
                            <h4 className='slider__txt'>Секрет</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider2} alt="img"/>
                            <h4 className='slider__txt'>Компланарный Моноблок</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider3} alt="img"/>
                            <h4 className='slider__txt'>Рото</h4>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='slider__img' src={slider4} alt="img"/>
                            <h4 className='slider__txt'>Барня</h4>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Tech
