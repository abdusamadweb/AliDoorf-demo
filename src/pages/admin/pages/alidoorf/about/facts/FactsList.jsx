import React, {useEffect, useState} from 'react'
import FactsItem from "./FactsItem";
import {getData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const FactsList = () => {


    const [type, setType] = useState('ali')


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/about?type=${type}`)
            setResult(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')


    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div>
            <div className="row between">
                <div className='title d-block center fw500 fz22 mb2'>Facts</div>
                <select className='select mb1' onChange={(e) => changeType(e.target.value)}>
                    <option value="ali">Alidoorf</option>
                    <option value="prime">Primeloft</option>
                    <option value="mebel">Mebel</option>
                </select>
            </div>
            <ul className='ali-about__list grid'>
                <li className="item item__link plus grid grid-center">
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                {
                    result?.data?.map(i => (
                        <FactsItem
                            i={i}
                            setEffect={setEffect}
                            type={type}
                            key={i.attachmentId}
                        />
                    ))
                }
            </ul>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <AdminForm
                            valueRu={titRu}
                            valueEn={titEn}
                            valueUz={titUz}
                            setValueRu={setTitRu}
                            setValueEn={setTitEn}
                            setValueUz={setTitUz}
                            formTitle='Title'
                            setEffect={setEffect}
                            setModal={setModal}
                            img={true}
                            one={false}
                            type={type}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default FactsList
