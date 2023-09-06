import React, {useEffect, useState} from 'react'
import CatalogItem from "./CatalogItem";
import {getData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";

const CatalogList = () => {


    const [type, setType] = useState('ali')


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/category?page=0&size=20&type=${type}`)
            setResult(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')
    const [link, setLink] = useState('/')


    // change select
    const changeType = (e) => {
        setType(e)
        setTimeout(() => setEffect(prev => !prev), 1000)
    }


    return (
        <div className='mb3'>
            <div className="row between">
                <div className='admin-main__title fw500 fz20 mb2'>Catalog</div>
                <select className='select mb1' onChange={(e) => changeType(e.target.value)}>
                    <option value="ali">Alidoorf</option>
                    <option value="prime">Primeloft</option>
                    <option value="mebel">Mebel</option>
                </select>
            </div>
            <ul className='catalog__list grid'>
                <li className="item item__link plus grid grid-center">
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                {
                    result?.data?.map(i =>(
                        <CatalogItem
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
                            catalog={true}
                            link={link}
                            setLink={setLink}
                            type={type}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default CatalogList
