import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from "../firebase.config"
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {

            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            //check for user
            //get user from google signin, pass into here
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            if (!docSnap.exists()) {
                //if doesn't exist then create in DB 
                await setDoc(doc(db, 'users', user.uid), {
                    fullName: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        }
        catch (error) {
            toast.error("Could not authorize with Google.")
        }
    }


    return (
        <div className="socialLogin">
            <p>
                Sign {location.pathname === '/signup' ? 'UP' : 'IN '} with </p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img className="socialIconImg" src={googleIcon} alt="google icon" />
            </button>
        </div>
    )
}

export default OAuth