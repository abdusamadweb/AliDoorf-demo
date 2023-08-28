import './AboutTexts.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {getPostDataUser} from "../../../../api/apiResp";
import {formatPhone} from "../../../../assets/scripts/global";
import {API_TEST} from "../../../../api/apiConfig";

const AboutTexts = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'ali_about_doors_sub',
        'ali_about_doors_tit',
        'ali_about_doors_txt1',
        'ali_about_doors_txt2',
        'ali_about_doors_txt3',
        'ali_about_doors_txt4',
        'ali_about_doors_img',
        'ali_about_doors_btn',
        'ali_about_doors_first_fabric',

        'global_address',
        'global_phone',
        'global_email',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + result?.data?.ali_about_doors_img


    return (
        <div className='texts page bg-cl'>
            <div className="container">
                <div className="texts__inner grid px2">
                    <div className="diver">
                        <img className='img' src={img} alt="img"/>
                        <div className='margin'>
                            <p className='desc mb3'>{ result.data?.ali_about_doors_txt2 || '...' }</p>
                            <div className='row no-wrap align-center mb3'>
                                <i className="fa-solid fa-location-dot icon"/>
                                <div className='desc'>
                                    { result.data?.ali_about_doors_first_fabric || '...' }
                                    <br/>
                                    { result.data?.global_address || '...' }
                                </div>
                            </div>
                            <div className="row no-wrap align-center mb2">
                                <i className="fa-solid fa-mobile-screen-button icon"/>
                                <a className='link' href={`tel: ${ result.data?.global_phone || '...' }`}>
                                    { formatPhone(result.data?.global_phone || '+998') }
                                </a>
                            </div>
                            <div className="row no-wrap align-center">
                                <i className="fa-solid fa-envelope icon"/>
                                <a className='link' href={`mailto: ${ result.data?.global_email || '...' }`}>{ result.data?.global_email || '...' }</a>
                            </div>
                        </div>
                    </div>

                    <div className='wrapper py3'>
                        <div className="titles">
                            <div className='txt'>{ result.data?.ali_about_doors_sub || '...' }</div>
                            <h1 className="title fw300 pb2">{ result.data?.ali_about_doors_tit || '...' }</h1>
                        </div>
                        <h3 className="desc fw500 mb2">{ result.data?.ali_about_doors_txt1 || '...' }</h3>
                        <p className='desc'>{ result.data?.ali_about_doors_txt3 || '...' }</p>
                        <p className="desc">{ result.data?.ali_about_doors_txt4 || '...' }</p>
                        <Link className='btn mt2' to='/alidoorf/catalog'>{ result.data?.ali_about_doors_btn || '...' }</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTexts
