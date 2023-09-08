import './AboutMain.scss'
import React, {useEffect, useState} from 'react'
import {$resp, getPostDataUser} from "../../../../api/apiResp";
import {toast} from "react-hot-toast";
import {API_TEST} from "../../../../api/apiConfig";

const AboutMain = ({ lang, type }) => {


    const [popupModal, setPopupModal] = useState(false)


    const [result, setResult] = useState([])
    const arr = [
        `${type}_about_hero_tit`,
        `${type}_about_hero_static_txt`,
        `${type}_about_hero_animation_txt`,
        `${type}_about_hero_btn`,

        `${type}_about_hero_img`,

        'form_access_name',
        'form_access_phone',
        'form_access_city',
        'form_access_email',

        'form_name',
        'form_phone',
        'form_city',
        'form_desc',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang, type])


    const [textActive, setTextActive] = useState(1)
    const texts = result.data?.[`${type}_about_hero_animation_txt`]?.split(', ')?.map(item => item)
    setTimeout(() => {
        setTextActive(textActive < 4 ? textActive+1 : textActive-3)
    }, 2000)


    // form
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const postForm = (e) => {
        e.preventDefault()

        const item = {
            name,
            phoneNumber,
            address,
            email,
            description
        }
        $resp
            .post('/api/alidoorf/v1/order', item)
            .then(() => toast.success('Success !'))
            .catch(err => {
                err.response.data.errors.map(i => (
                    toast.error(i.errorMsg)
                ))
            })
    }

    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + result?.data?.[`${type}_about_hero_img`]


    return (
        <div className='about page' style={{backgroundImage: `url(${img})`}}>
            <div className="bg-shadow"/>
            <div className="container">
                <div className="about__titles">
                    <span className="title mb2">{ result.data?.[`${type}_about_hero_tit`] || '...' }</span>
                    <h2 className='subtitle lato mb2'>
                        <span className='txt'>{ result.data?.[`${type}_about_hero_static_txt`] || '...' }</span>
                        <span className='txt2'>
                            {
                                texts?.map((i, num) => (
                                    <b className='bold' key={num}>
                                        {
                                            i.split('').map((t, index) => (
                                                <i className={textActive === num+1 ? 'in' : 'out'} key={index}>{ t.replace(' ', '\u00A0') }</i>
                                            ))
                                        }
                                    </b>
                                ))
                            }
                        </span>
                    </h2>
                    <button className='btn' onClick={() => setPopupModal(true)}>{ result.data?.[`${type}_about_hero_btn`] || '...' }</button>
                </div>
            </div>

            <div className={`modal grid grid-center ${popupModal ? 'active' : ''}`}>
                <form className={`form ${popupModal ? 'active' : ''}`} onSubmit={postForm}>
                    <span className='form__close no-copy' onClick={() => setPopupModal(false)}>
                        <i className="fa-solid fa-x icon"/>
                    </span>
                    <span className='form__title'>{ result.data?.[`${type}_about_hero_btn`] || '...' }</span>
                    {
                        result.data?.form_access_name === 'true' &&
                        <label className='form__label'>
                            <input
                                className='inp'
                                type="text"
                                placeholder={result.data?.form_name || '...'}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    }
                    {

                        result.data?.form_access_phone === 'true' &&
                        <label className='form__label'>
                            <input
                                className='inp'
                                type="text"
                                placeholder={result.data?.form_phone || '...'}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label>
                    }
                    {
                        result.data?.form_access_city === 'true' &&
                        <label className='form__label'>
                            <input
                                className='inp'
                                type="text"
                                placeholder={result.data?.form_city || '...'}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>
                    }
                    {
                        result.data?.form_access_email === 'true' &&
                        <label className='form__label'>
                            <input
                                className='inp'
                                type="text"
                                placeholder={'Email'}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    }
                    <label className='form__label'>
                        <textarea
                            className='inp area'
                            placeholder={result.data?.form_desc || '...'}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <button className='form__btn'>отправить</button>
                </form>
                <div className="bg" onClick={() => setPopupModal(false)}/>
            </div>
        </div>
    )
}

export default AboutMain
