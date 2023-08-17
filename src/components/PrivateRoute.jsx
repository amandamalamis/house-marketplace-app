import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'


const PrivateRoute = () => {

    const {loggedIn, checkingStatus} = useAuthStatus()

    if (checkingStatus) {
        //return
    }

    return loggedIn ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
}

export default PrivateRoute