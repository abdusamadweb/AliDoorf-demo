import React, {useState} from 'react'
import {deleteData} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import AdminForm from "../../../../../../components/admin/AdminForm";
import {API_TEST} from "../../../../../../api/apiConfig";

const FactsItem = ({ i, setEffect, type }) => {


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/about/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
    }


    return (
        <li className='item'>
            <img className='item__img mt1' src={img} alt="img"/>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Title ru:</span>
                <span className='item__txt'>{ i.nameRu }</span>
            </div>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Title en:</span>
                <span className='item__txt'>{ i.nameEn }</span>
            </div>
            <div className='row no-wrap between'>
                <span className='fw500 mr1'>Title uz:</span>
                <span className='item__txt'>{ i.nameUz }</span>
            </div>
            <div className='btns'>
                <button className='btn' onClick={() => setModal(true)}>Edit</button>
                <button className='btn del' onClick={removeData}>Delete</button>
            </div>
            <>
                {
                    modal &&
                    <div className='admin-modal'>
                        <AdminForm
                            i={i}
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
                            edit={true}
                            one={false}
                            type={type}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default FactsItem
