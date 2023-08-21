import React, {useEffect, useState} from 'react'
import {getData} from "../../../api/apiResp";

const RequestForms = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getData('/api/alidoorf/v1/order?page=0&size=50')
            setResult(res)
        }
        get()
    }, [])


    return (
        <div>
            <div className='admin-main__title fw500 fz20 mb1'>Request forms</div>
            <ul className='list'>
                {
                    result?.data?.map((i, index) => (
                        <li className='item' key={index}>
                            {
                                (i.name !== '' || i.name !== null) &&
                                <div className='row between align-center'>
                                    <span className='txt'>Name:</span>
                                    <span className='txt2'>{ i.name }</span>
                                </div>
                            }
                            {
                                (i.phoneNumber !== '' || i.phoneNumber !== null) &&
                                <div className='row between align-center'>
                                    <span className='txt'>Phone:</span>
                                    <span className='txt2'>{ i.phoneNumber }</span>
                                </div>
                            }
                            {
                                (i.address !== '' || i.address !== null) &&
                                <div className='row between align-center'>
                                    <span className='txt'>City:</span>
                                    <span className='txt2'>{ i.address }</span>
                                </div>
                            }
                            {
                                (i.email !== '' || i.email !== null) &&
                                <div className='row between align-center'>
                                    <span className='txt'>Email:</span>
                                    <span className='txt2'>{ i.email }</span>
                                </div>
                            }
                            {
                                (i.description !== '' || i.description !== null) &&
                                <div className='row between align-center'>
                                    <span className='txt'>Description:</span>
                                    <span className='txt2'>{ i.description }</span>
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RequestForms
