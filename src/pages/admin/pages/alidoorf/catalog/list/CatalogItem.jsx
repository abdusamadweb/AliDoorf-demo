import React, {useState} from 'react'
import {API_TEST} from "../../../../../../api/apiConfig";
import {deleteData} from "../../../../../../api/apiResp";
import {toast} from "react-hot-toast";
import AdminForm from "../../../../../../components/admin/AdminForm";
import {Link} from "react-router-dom";

const CatalogItem = ({ i, setEffect, type }) => {


    const [modal, setModal] = useState(false)

    const [titRu, setTitRu] = useState('')
    const [titEn, setTitEn] = useState('')
    const [titUz, setTitUz] = useState('')
    const [link, setLink] = useState('/')


    const img = API_TEST + 'api/alidoorf/v1/attachment/get/' + i.attachmentId || null


    const removeData = () => {
        const get = async () => {
            const res = await deleteData(`/api/alidoorf/v1/category/remove/${i.id}`)
            if (res.success) {
                toast.success('Deleted !')
                setEffect(prev => !prev)
            }
        }
        get()
    }


    return (
        <li className="item">
            <Link className='item__link' to={`/admin/pages/alidoorf/catalog/${i.id}`} style={{color: '#111'}}>
                <img className='img mb1' src={img} alt="img" style={{height: '200px', width: '100%'}}/>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title ru:</span>
                    <span className='txts'>{ i.nameRu }</span>
                </div>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title en:</span>
                    <span className='txts'>{ i.nameEn }</span>
                </div>
                <div className='row no-wrap between mb1'>
                    <span className='fw500 mr1'>Title uz:</span>
                    <span className='txts'>{ i.nameUz }</span>
                </div>
            </Link>
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
                            catalog={true}
                            link={link}
                            setLink={setLink}
                            type={type}
                        />
                        <div className="bg" onClick={() => setModal(false)}/>
                    </div>
                }
            </>
        </li>
    )
}

export default CatalogItem
