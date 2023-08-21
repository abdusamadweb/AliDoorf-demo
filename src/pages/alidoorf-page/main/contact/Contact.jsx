import './Contact.scss'
import React, {useEffect, useState} from 'react'
import {$resp, getPostDataUser} from "../../../../api/apiResp";
import {formatPhone} from "../../../../assets/scripts/global";
import {toast} from "react-hot-toast";

const Contact = ({ lang }) => {


    const [result, setResult] = useState([])
    const arr = [
        'chat_us',
        'chat_us_contact',
        'chat_us_btn',
        'global_email',
        'global_phone',

        'form_access_name',
        'form_access_phone',
        'form_access_city',
        'form_access_email',
    ]
    useEffect(() => {
        const get = async () => {
            const res = await getPostDataUser('/api/alidoorf/v1/content/data-graph', arr, lang)
            setResult(res)
        }
        get()
    }, [lang])


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


    return (
        <div className='contact-page page bg-cl py3'>
            <div className="container">
                <div className="titles">
                    <div className="title">{ result.data?.chat_us || '...' }</div>
                </div>
                <div className='contact-page__body grid'>
                    <form className='form' onSubmit={postForm}>
                        {
                            result.data?.form_access_name === 'true' &&
                            <label className='form__label'>
                                <i className="fa-solid fa-user icon"/>
                                <input
                                    className='inp'
                                    type="text"
                                    placeholder='Ваше имя'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        }
                        {

                            result.data?.form_access_phone === 'true' &&
                            <label className='form__label'>
                                <i className="fa-solid fa-phone icon"/>
                                <input
                                    className='inp'
                                    type="text"
                                    placeholder='Телефон'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </label>
                        }
                        {
                            result.data?.form_access_city === 'true' &&
                            <label className='form__label'>
                                <i className="fa-regular fa-building icon"/>
                                <input
                                    className='inp'
                                    type="text"
                                    placeholder='Город'
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </label>
                        }
                        {
                            result.data?.form_access_email === 'true' &&
                            <label className='form__label'>
                                <i className="fa-solid fa-at icon"/>
                                <input
                                    className='inp'
                                    type="text"
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        }
                        <label className='form__label'>
                            <i className="fa-solid fa-envelope icon"/>
                            <textarea
                                className='inp area'
                                placeholder='Собшение'
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        <button className='form__btn fw600 mt2'>{ result.data?.chat_us_btn || '...' }</button>
                    </form>
                    <div className="contact">
                        <h3 className="title fw400 fz22 mt1 pb2 mb2">{ result.data?.chat_us_contact || '...' }</h3>
                        <div className='contact__body'>
                            <div className='mb2'>
                                <h4 className="name">Email</h4>
                                <a className='link' href={`mailto: ${ result.data?.global_email || '...' }`}>{ result.data?.global_email || '...' }</a>
                            </div>
                            <div>
                                <h4 className="name">Телефон</h4>
                                <a className='link' href={`tel: ${result.data?.global_phone || '+998'}`}>{ formatPhone(result.data?.global_phone || '+998') }</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
