import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
    const [email, setEmail] = useState()
    const onChange = e => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success("Email was sent.")
        }
        catch (error) {
            toast.errort("Could not send reset email.")
        }
    }

    return (
        <div className='pageContainer'>
            <header>
                <p className="pageHeader">
                    Forgot Password
                </p>
                <main>
                    <form action="" onSubmit={onSubmit}>
                        <input
                            type="text"
                            className="emailInput"
                            id="email"
                            value={email}
                            onChange={onChange} />
                        <Link className='forgotPasswordLink' to='/login'>

                        </Link>
                        <div className="logInText">
                            <div className="logInText">Set Reset Link
                                <button className="logInButton">
                                    <ArrowRightIcon fill="#ffffff" width="34px" height="34px"> </ArrowRightIcon>
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </header>

        </div>
    )
}

export default ForgotPassword