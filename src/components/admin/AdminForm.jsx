import React from 'react'
import {putData} from "../../api/apiResp";

const AdminForm = ({
   value,
   valueRu,
   valueEn,
   valueUz,
   setValueRu,
   setValueEn,
   setValueUz,
   formTitle,
   setEffect,
   textarea,
   one
}) => {


    const postData = (e) => {
        e.preventDefault()

        const item = {
            key: value,
            valueRu,
            valueEn,
            valueUz
        }
        putData('/api/alidoorf/v1/content/update-content', item)

        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <form className='form' onSubmit={postData}>
            <span className='title fw500 fz18 mb1'>{ formTitle }:</span>
            {
                one === false ?
                    <>
                        <label>
                            <span className='txt'>Ru</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                            }
                        </label>
                        <label>
                            <span className='txt'>En</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} en . . .`}
                                        value={valueEn}
                                        onChange={(e) => setValueEn(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} en . . .`}
                                        value={valueEn}
                                        onChange={(e) => setValueEn(e.target.value)}
                                    />
                            }
                        </label>
                        <label>
                            <span className='txt'>Uz</span>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} uz . . .`}
                                        value={valueUz}
                                        onChange={(e) => setValueUz(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} uz . . .`}
                                        value={valueUz}
                                        onChange={(e) => setValueUz(e.target.value)}
                                    />
                            }
                        </label>
                    </>
                    : one === true ?
                        <label>
                            {
                                !textarea ?
                                    <input
                                        className='admin-inp'
                                        type="text"
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                                    :
                                    <textarea
                                        className='admin-inp'
                                        placeholder={`${formTitle} ru . . .`}
                                        value={valueRu}
                                        onChange={(e) => setValueRu(e.target.value)}
                                    />
                            }
                        </label>
                        : one === 'p' &&
                            <label>
                                <input
                                    className='admin-inp'
                                    type="text"
                                    placeholder='Parallax . . .'
                                    value={valueRu}
                                    onChange={(e) => setValueRu(e.target.value)}
                                />
                            </label>
            }
            <button className='admin-btn'>Submit</button>
        </form>
    )
}

export default AdminForm
