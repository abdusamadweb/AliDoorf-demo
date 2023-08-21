import './About.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {getPostDataUser} from "../../../../api/apiResp";

const About = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'ali_home_hero_sub',
        'ali_home_hero_tit',
        'ali_home_news_btn',
        'ali_cont_tit',
        'ali_cont_desc',
        'ali_cont_sub',
        'ali_cont_btn',
        'ali_cont_num_count1',
        'ali_cont_num_count2',
        'ali_cont_num_year',
        'ali_cont_num_tit1',
        'ali_cont_num_tit2',
        'ali_cont_list',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])

    const texts = result.data?.ali_cont_list.split(', ').map(item => item)


    return (
        <div className='about page bg-cl py3'>
            <div className="container">
                <div className="head row no-wrap between align-center">
                    <div className="titles">
                        <span className='subtitle'>{ result.data?.ali_home_hero_sub || '...' }</span>
                        <h2 className="title">{ result.data?.ali_home_hero_tit || '...' }</h2>
                    </div>
                    <Link className='head__btn fw500 fz14' to='news'>{ result.data?.ali_home_news_btn || '...' }</Link>
                </div>
                <div className="body grid">
                    <div className="body__content pr1">
                        <h2 className='title fw600 fz22 mb2'>{ result.data?.ali_cont_tit || '...' }</h2>
                        <div className="descs">
                            <p className='desc'>{ result.data?.ali_cont_desc || '...' }</p>
                            <p className="desc last fw500">{ result.data?.ali_cont_sub || '...' }</p>
                            <ul className='descs__list row flex-column mb1'>
                                {
                                    texts?.map((i, index) => (
                                        <li className='item' key={index}>
                                            <i className="fa-regular fa-circle-check icon"/>
                                            <span className='txt'>«{ i }»</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link className='btn fw500' to='/alidoorf/about'>{ result.data?.ali_cont_btn || '...' }</Link>
                    </div>
                    <div className="body__numbers">
                        <div className='wrapper mb3'>
                            <span className='number'>{ result.data?.ali_cont_num_count1 || '...' }</span>
                            <span className='title fw500'>{ result.data?.ali_cont_num_year || '...' }</span>
                            <span className='title'>{ result.data?.ali_cont_num_tit1 || '...' }</span>
                        </div>
                        <div className='wrapper'>
                            <span className='number number2'>{ result.data?.ali_cont_num_count2 || '...' }</span>
                            <span className='title fw500'>{ result.data?.ali_cont_num_year || '...' }</span>
                            <span className='title'>{ result.data?.ali_cont_num_tit2 || '...' }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
