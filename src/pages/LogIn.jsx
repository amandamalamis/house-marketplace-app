import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'

function LogIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })


    const { email, password } = formData
    const navigate = useNavigate()
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            //use the ID 
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            if (userCredential.user) {
                navigate('/')
            }
        }

        catch (error) {
            toast.error('User credential error')
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome Back!
                    </p>
                </header>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        className="emailInput"
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={onChange}
                    />
                    <div className="passwordInputDiv">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="passwordInput"
                            placeholder='Password'
                            id='password'
                            value={password}
                            onChange={onChange}
                        />
                        <img
                            src={visibilityIcon}
                            alt='Show password'
                            className='showPassword'
                            onClick={() => setShowPassword((prevState) => !prevState)}>

                        </img>
                        <Link to='/forgotpassword'
                            className='forgotPasswordLink'>
                            Forgot Password
                        </Link>
                    </div>


                </form>
                <OAuth></OAuth>
                <Link to='/signup' className='registerLink'>
                    Sign Up
                    <div className="logInBar">
                        <p className="logInText">
                            Sign In
                        </p>
                        <button className="logInButton">
                            <ArrowRightIcon fill="white" width='34px' height='34px' />
                        </button>
                    </div>
                </Link>


            </div>

        </>
    )

}
export default LogIn