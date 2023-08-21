import './Tech.scss'
import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import {Navigation, Pagination} from "swiper/modules";
import {getData, getPostDataUser} from "../../../../api/apiResp";
import {API_TEST} from "../../../../api/apiConfig";

const Tech = ({ lang }) => {

    const [result, setResult] = useState([])
    const arr = [
        'ali_tech_sub',
        'ali_tech_tit',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    // get data
    const [list, setList] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/technology?page=0&size=20`)
            setList(res)
        }
        get()
    }, [])


    return (
        <div className='tech page bg-cl pt2'>
            <div className="container">
                <div className="titles">
                    <span className='subtitle'>{ result.data?.ali_tech_sub || '...' }</span>
                    <h2 className="title">{ result.data?.ali_tech_tit || '...' }</h2>
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
                        {
                            list?.data?.map(i => (
                                <div>
                                    <SwiperSlide key={i.attachmentId}>
                                        <img className='slider__img' src={API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null} alt="img"/>
                                        <h4 className='slider__txt'>{ i.title }</h4>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Tech
