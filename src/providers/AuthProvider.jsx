import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import {auth} from '../firebase/firebase.config'

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

GoogleProvider.setCustomParameters({
    prompt: "select_account"
})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, GithubProvider)
    }

    const emailPassLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {user, loading, setLoading, createUser, googleLogin, githubLogin, updateUser, emailPassLogin, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;