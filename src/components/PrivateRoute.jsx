import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {

    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        <Spinner />
        //return
    }

    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute