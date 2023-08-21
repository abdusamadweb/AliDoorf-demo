import React, {useEffect, useState} from 'react'
import NewsListItem from "./NewsListItem";
import AttachmentTextForm from "../../../../../../../components/admin/AttachmentTextForm";
import {getData} from "../../../../../../../api/apiResp";

const NewsList = () => {


    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    useEffect(() => {
        const get = async () => {
            const res = await getData(`/api/alidoorf/v1/news?page=0&size=20`)
            setResult(res)
        }
        get()
    }, [effect])


    // modal
    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    const [date, setDate] = useState(new Date())


    return (
        <div>
            <div className='admin-main__subtitle fw500 fz20 mb2'>News items:</div>
            <ul className='news__list grid'>
                <li className='item plus'>
                    <button className='plus__btn' onClick={() => setModal(true)}>
                        <i className="fa-solid fa-plus"/>
                    </button>
                </li>
                {
                    result?.data?.map(i => (
                        <NewsListItem
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
                            descRu={descRu}
                            descEn={descEn}
                            descUz={descUz}
                            setDescRu={setDescRu}
                            setDescEn={setDescEn}
                            setDescUz={setDescUz}
                            date={date}
                            setDate={setDate}
                            formTitle='Title'
                            setEffect={setEffect}
                            setModal={setModal}
                            index={result?.data?.length + 1}
                            textarea={true}
                            news={true}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </div>
    )
}

export default NewsList
