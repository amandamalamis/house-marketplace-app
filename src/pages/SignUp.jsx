import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    })

    const { fullname, email, password } = formData
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

                updateProfile(auth.currentUser,
                {
                    displayName: fullname
                })

            const formDataCopy = { ...formData }

            //delete password so not in db
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            //returns promise from async
            await setDoc(doc(db, 'users', user.uid), formDataCopy)
            navigate('/')
        }
        catch (error) {
            toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Create An Account
                    </p>
                </header>
                <form onSubmit={onSubmit}>
                    <input type="text"
                        className="nameInput"
                        placeholder='Name'
                        id='fullname'
                        value={fullname}
                        onChange={onChange}
                    />
                    <input
                        type='email'
                        className='emailInput'
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

                    </div>
                    <Link to='/forgotpassword'
                        className='forgotPasswordLink'>
                        Forgot Password
                    </Link>
                    <div className="signUpBar">
                        <p className="signUpText">
                            Sign Up
                        </p>
                        <button className="signUpButton">
                            <ArrowRightIcon fill="white" width='34px' height='34px' />
                        </button>
                    </div>
                </form>
                <OAuth></OAuth>
                <Link to='/login' className='registerLink'>
                    Login Instead
                </Link>


            </div>

        </>
    )

}
export default SignUp