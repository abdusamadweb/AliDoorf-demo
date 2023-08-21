import React, {useState} from 'react'
import {deleteData} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import AttachmentTextForm from "../../../../../../components/admin/AttachmentTextForm";
import {API_TEST} from "../../../../../../api/apiConfig";

const HomeSliderItem = ({ i, setEffect }) => {


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/technology/${i.id}`)
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
                <span className='item__txt'>{ i.titleRu }</span>
            </div>
            <div className='row no-wrap between mb1'>
                <span className='fw500 mr1'>Title en:</span>
                <span className='item__txt'>{ i.titleEn }</span>
            </div>
            <div className='row no-wrap between'>
                <span className='fw500 mr1'>Title uz:</span>
                <span className='item__txt'>{ i.titleUz }</span>
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
                            formTitle='Title'
                            setEffect={setEffect}
                            setModal={setModal}
                            index={1}
                            edit={true}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default HomeSliderItem
