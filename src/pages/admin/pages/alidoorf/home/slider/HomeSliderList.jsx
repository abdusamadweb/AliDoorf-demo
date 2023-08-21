import React, {useEffect, useState} from 'react'
import HomeSliderItem from "./HomeSliderItem";
import {getData} from "../../../../../../api/apiResp";
import AttachmentTextForm from "../../../../../../components/admin/AttachmentTextForm";

const HomeSliderList = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/technology?page=0&size=20`)
            setResult(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')


    return (
        <div>
            <div className='admin-main__subtitle fw500 fz20 mb2'>Slider:</div>
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
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default HomeSliderList
