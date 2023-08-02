import React from 'react'
import {Navigate, Outlet, useLocation} from "react-router-dom"

const RequireAuth = () => {

    const values = Object.keys(localStorage)

    return (
         values.includes('token') ?
            <Outlet />
            : <Navigate to='/admin/sign-in'/>
    )
}

export default RequireAuth
