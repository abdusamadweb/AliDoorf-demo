import './Login.scss'
import React, {useState} from 'react'
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import $api from "../../../api";

const Login = () => {

    const navigate = useNavigate()


    const [phoneNumber, setPhoneNumber] = useState(0)
    const [password, setPassword] = useState('')

    const logIn = (e) => {
        e.preventDefault()

        const item = { phoneNumber, password }

        $api
            .post('/api/alidoorf/v1/auth/sign-in', item)
            .then(res => {
                toast.success('Success !')

                localStorage.setItem("token", res.data.data.accessToken)
                navigate('/admin')
            })
            .catch(err => {
                console.log(err)
                toast.error('Error !')
            })
    }


    return (
        <div className='login grid grid-center'>
            <div className="container">
                <form className="login__form form center p2" onSubmit={logIn}>
                    <span className='form__title mb2'>Admin Login</span>
                    <label className='form__label mb1'>
                        <span className='txt'>Phone number:</span>
                        <input
                            className='inp'
                            type="tel"
                            placeholder='Phone number . . .'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </label>
                    <label className='form__label mb2'>
                        <span className='txt'>Password:</span>
                        <input
                            className='inp'
                            type="password"
                            placeholder='Password . . .'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button className='form__btn fz18'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default Login
