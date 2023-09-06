import React, {useEffect, useState} from 'react'
import AdminForm from "../../../../../../components/admin/AdminForm";
import {getPostData} from "../../../../../../api/apiResp";

const ContentNumbers = () => {

    const [type, setType] = useState('ali')

    const [effect, setEffect] = useState(false)
    const [result, setResult] = useState([])
    const arr = [
        `${type}_cont_num_count1`,
        `${type}_cont_num_count2`,
        `${type}_cont_num_tit1`,
        `${type}_cont_num_tit2`
    ]
    useEffect(() => {
        const get = async () => {
            let res = null
            res = await getPostData('/api/alidoorf/v1/content/data-graph', arr)
            setResult(res)
        }
        get()
    }, [effect])

    const [num1, setNum1] = useState('0')
    const [num2, setNum2] = useState('0')

    const [tit1Ru, setTit1Ru] = useState('')
    const [tit1En, setTit1En] = useState('')
    const [tit1Uz, setTit1Uz] = useState('')

    const [tit2Ru, setTit2Ru] = useState('')
    const [tit2En, setTit2En] = useState('')
    const [tit2Uz, setTit2Uz] = useState('')

    useEffect(() => {
        setNum1(result?.data?.[`${type}_cont_num_count1_ru`])
        setNum2(result?.data?.[`${type}_cont_num_count2_ru`])

        setTit1Ru(result?.data?.[`${type}_cont_num_tit1_ru`])
        setTit1En(result?.data?.[`${type}_cont_num_tit1_en`])
        setTit1Uz(result?.data?.[`${type}_cont_num_tit1_uz`])

        setTit2Ru(result?.data?.[`${type}_cont_num_tit2_ru`])
        setTit2En(result?.data?.[`${type}_cont_num_tit2_en`])
        setTit2Uz(result?.data?.[`${type}_cont_num_tit2_uz`])
    }, [result, effect])


    return (
        <div>
            <div className='admin-main__subtitle fw500 fz20 mb2'>Content numbers:</div>
            <div>
                <AdminForm
                    value={`${type}_cont_num_count1`}
                    valueRu={num1}
                    valueEn={num1}
                    valueUz={num1}
                    setValueRu={setNum1}
                    setValueEn={setNum1}
                    setValueUz={setNum1}
                    formTitle={'Year of market'}
                    setEffect={setEffect}
                    one={true}
                    setType={setType}
                />
                <AdminForm
                    value={`${type}_cont_num_tit1`}
                    valueRu={tit1Ru}
                    valueEn={tit1En}
                    valueUz={tit1Uz}
                    setValueRu={setTit1Ru}
                    setValueEn={setTit1En}
                    setValueUz={setTit1Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    one={false}
                    setType={setType}
                />
            </div>

            <div>
                <AdminForm
                    value={`${type}_cont_num_count2`}
                    valueRu={num2}
                    valueEn={num2}
                    valueUz={num2}
                    setValueRu={setNum2}
                    setValueEn={setNum2}
                    setValueUz={setNum2}
                    formTitle={'Year of guarantee'}
                    setEffect={setEffect}
                    one={true}
                    setType={setType}
                />
                <AdminForm
                    value={`${type}_cont_num_tit2`}
                    valueRu={tit2Ru}
                    valueEn={tit2En}
                    valueUz={tit2Uz}
                    setValueRu={setTit2Ru}
                    setValueEn={setTit2En}
                    setValueUz={setTit2Uz}
                    formTitle={'Text'}
                    setEffect={setEffect}
                    one={false}
                    setType={setType}
                />
            </div>
        </div>
    )
}

export default ContentNumbers
