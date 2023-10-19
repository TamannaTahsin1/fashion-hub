import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext(null)
  
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // for login page
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // for email and password register
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
        // for sign out
        const logOut = () =>{
            setLoading(true)
            return signOut(auth)
            .then()
            .catch()
        }
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                console.log('user', currentUser)
                setUser(currentUser)
                setLoading(false)
            });
            return () =>{
                unSubscribe()
            }
        }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;