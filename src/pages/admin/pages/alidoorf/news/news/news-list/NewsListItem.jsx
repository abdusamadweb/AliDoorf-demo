import React, {useState} from 'react'
import news1 from "../../../../../../../assets/images/news1.jpg";
import {API_TEST} from "../../../../../../../api/apiConfig";
import {deleteData} from "../../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import AttachmentTextForm from "../../../../../../../components/admin/AttachmentTextForm";

const NewsListItem = ({ i, setEffect }) => {


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')

    const [descRu, setDescRu] = useState('')
    const [descEn, setDescEn] = useState('')
    const [descUz, setDescUz] = useState('')

    const [date, setDate] = useState(new Date())


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/news/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
    }


    return (
        <li className='item'>
            <img className='item__img' src={img} alt="img" style={{height: '200px'}}/>
            <div className='item__wrapper'>
                <span className="item__time">{ new Date(i.date).toLocaleDateString() }</span>
                <h4 className="item__title">{ i.title }</h4>
                <p className='item__desc'>{ i.description }</p>
            </div>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del' onClick={removeData}>Delete</button>
            </div>
            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <AttachmentTextForm
                            i={i}
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
                            index={1}
                            textarea={true}
                            edit={true}
                            news={true}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default NewsListItem
