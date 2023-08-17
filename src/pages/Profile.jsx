import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Profile() {

    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
        fullName: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    const { fullName, email } = formData

    const navigate = useNavigate()

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== fullName) {
                //Update display name in firebase app
                await updateProfile(auth.currentUser,
                    {
                        displayName: fullName
                    })
                //Update in firestore
                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    fullName
                })
            }
        }
        catch {
            toast.error('Could not update profile dettails.')
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    return <div className="profile">
        <header className="profileHeader">
            <p className="pageHeader">My Profile</p>
            <button type="button" className="logOut" onClick={onLogout}>Logout</button>
        </header>
        <main>
            <div className="profileDetailsHeader">
                <p className="profileDetailsText">
                    Personal Details
                    <p className="changePersonalDetails"> onClick={() => {
                        changeDetails && onSubmit()
                        setChangeDetails((prevState) => !prevState)
                    }}
                        {changeDetails ? 'done' : 'change'}
                    </p>
                </p>
            </div>
            <div className="profileCard">
                <form action="">
                    <input
                        id="fullName"
                        disabled={!changeDetails}
                        className={!changeDetails ? 'profileName' : 'profileNameActive'}
                        value={fullName}
                        onChange={onChange}
                        type="text" />

                    <input
                        id="email"
                        disabled={!changeDetails}
                        className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
                        value={email}
                        onChange={onChange}
                        type="text" />
                </form>
            </div>
        </main>
    </div>


}

export default Profile