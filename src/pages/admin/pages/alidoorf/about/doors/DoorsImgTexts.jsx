import React, {useEffect, useState} from 'react'
import {getPostData} from "../../../../../../api/apiResp";
import AdminForm from "../../../../../../components/admin/AdminForm";
import about1 from "../../../../../../assets/images/admin/alidoorf-about1.png";
import about2 from "../../../../../../assets/images/admin/alidoorf-about2.png";
import about3 from "../../../../../../assets/images/admin/alidoorf-about3.png";
import about4 from "../../../../../../assets/images/admin/alidoorf-about4.png";

const DoorsImgTexts = () => {

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        'ali_about_doors_txt1',
        'ali_about_doors_txt2',
        'ali_about_doors_txt3',
        'ali_about_doors_txt4'
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [txt1Ru, setTxt1Ru] = useState('')
    const [txt1En, setTxt1En] = useState('')
    const [txt1Uz, setTxt1Uz] = useState('')

    const [txt2Ru, setTxt2Ru] = useState('')
    const [txt2En, setTxt2En] = useState('')
    const [txt2Uz, setTxt2Uz] = useState('')

    const [txt3Ru, setTxt3Ru] = useState('')
    const [txt3En, setTxt3En] = useState('')
    const [txt3Uz, setTxt3Uz] = useState('')

    const [txt4Ru, setTxt4Ru] = useState('')
    const [txt4En, setTxt4En] = useState('')
    const [txt4Uz, setTxt4Uz] = useState('')

    useEffect(() => {
        setTxt1Ru(result?.data?.ali_about_doors_txt1_ru)
        setTxt1En(result?.data?.ali_about_doors_txt1_en)
        setTxt1Uz(result?.data?.ali_about_doors_txt1_uz)

        setTxt2Ru(result?.data?.ali_about_doors_txt2_ru)
        setTxt2En(result?.data?.ali_about_doors_txt2_en)
        setTxt2Uz(result?.data?.ali_about_doors_txt2_uz)

        setTxt3Ru(result?.data?.ali_about_doors_txt3_ru)
        setTxt3En(result?.data?.ali_about_doors_txt3_en)
        setTxt3Uz(result?.data?.ali_about_doors_txt3_uz)

        setTxt4Ru(result?.data?.ali_about_doors_txt4_ru)
        setTxt4En(result?.data?.ali_about_doors_txt4_en)
        setTxt4Uz(result?.data?.ali_about_doors_txt4_uz)
    }, [result, effect])


    return (
        <div>
            <div>
                <img className='img' src={about1} alt="img"/>
                <AdminForm
                    value='ali_about_doors_txt1'
                    valueRu={txt1Ru}
                    valueEn={txt1En}
                    valueUz={txt1Uz}
                    setValueRu={setTxt1Ru}
                    setValueEn={setTxt1En}
                    setValueUz={setTxt1Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    textarea={true}
                    one={false}
                />
            </div>

            <div>
                <img className='img' src={about2} alt="img"/>
                <AdminForm
                    value='ali_about_doors_txt2'
                    valueRu={txt2Ru}
                    valueEn={txt2En}
                    valueUz={txt2Uz}
                    setValueRu={setTxt2Ru}
                    setValueEn={setTxt2En}
                    setValueUz={setTxt2Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    textarea={true}
                    one={false}
                />
            </div>

            <div>
                <img className='img' src={about3} alt="img"/>
                <AdminForm
                    value='ali_about_doors_txt3'
                    valueRu={txt3Ru}
                    valueEn={txt3En}
                    valueUz={txt3Uz}
                    setValueRu={setTxt3Ru}
                    setValueEn={setTxt3En}
                    setValueUz={setTxt3Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    textarea={true}
                    one={false}
                />
            </div>

            <div>
                <img className='img' src={about4} alt="img"/>
                <AdminForm
                    value='ali_about_doors_txt4'
                    valueRu={txt4Ru}
                    valueEn={txt4En}
                    valueUz={txt4Uz}
                    setValueRu={setTxt4Ru}
                    setValueEn={setTxt4En}
                    setValueUz={setTxt4Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    textarea={true}
                    one={false}
                />
            </div>
        </div>
    )
}

export default DoorsImgTexts
