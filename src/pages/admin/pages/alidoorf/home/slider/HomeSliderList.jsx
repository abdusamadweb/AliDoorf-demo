import React, {useEffect, useState} from 'react'
import HomeSliderItem from "./HomeSliderItem";
import {getData} from "../../../../../../api/apiResp";
import AttachmentTextForm from "../../../../../../components/admin/AttachmentTextForm";

const HomeSliderList = () => {


    const [type, setType] = useState('ali')


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/technology?page=0&size=20&type=${type}`)
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
                <div className='admin-main__subtitle fw500 fz20 mb2'>Slider:</div>
                <select className='select mb1' onChange={(e) => changeType(e.target.value)}>
                    <option value="ali">Alidoorf</option>
                    <option value="prime">Primeloft</option>
                    <option value="mebel">Mebel</option>
                </select>
            </div>
            <ul className='ali__list mb3'>
                <li className="item item__link plus grid grid-center">
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                {
                    result?.data?.map(i => (
                        <HomeSliderItem
                            i={i}
                            setEffect={setEffect}
                            type={type}
                            key={i.id}
                        />
                    ))
                }
            </ul>

            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <AttachmentTextForm
                            valueRu={titRu}
                            valueEn={titEn}
                            valueUz={titUz}
                            setValueRu={setTitRu}
                            setValueEn={setTitEn}
                            setValueUz={setTitUz}
                            formTitle='Title'
                            setEffect={setEffect}
                            setModal={setModal}
                            index={result?.data?.length + 1}
                            type={type}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default HomeSliderList
