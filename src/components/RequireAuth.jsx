import React from 'react'
import {Navigate, Outlet} from "react-router-dom"

const RequireAuth = () => {

    const values = Object.keys(localStorage)

    return (
         values.includes('token') ?
            <Outlet />
            : <Navigate to='/admin/login'/>
    )
}

export default RequireAuth