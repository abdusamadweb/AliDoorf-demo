import React, {useEffect, useState} from 'react'
import {getPostData, putData} from "../../../api/apiResp";

const FormsEmail = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'form_global_email'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [email, setEmail] = useState('false')

    useEffect(() => {
        setEmail(result?.data?.form_global_email || '')
    }, [result, effect])


    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: 'form_global_email',
            valueRu: email,
            valueEn: email,
            valueUz: email
        }
        putData('/api/alidoorf/v1/content/update-content', item)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='mb3' onSubmit={postData}>
            <div className='admin-main__title fw500 fz20 mb1'>Email for forms</div>
            <label className='mb1'>
                <input
                    className='admin-inp'
                    type="email"
                    placeholder={`Email . . .`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default FormsEmail
