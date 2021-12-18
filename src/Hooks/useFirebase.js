import initalizeAuth from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    updateProfile
} from "firebase/auth";

import { useEffect, useState } from "react";

initalizeAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(user)
    // google SignIn handle
    const googleSignInHandler = (location, navigate) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    // auth observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                // User is signed out
                setUser({});
            }
        });
    }, [auth])

    // user profile Update
    const profileUpdate = () => {
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            // Profile updated!

        }).catch((error) => {
            // An error occurred
            setError(error.message);
        });
    }
    // google log out handle
    const googleLogOuthandler = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        });
    }
    return {
        googleSignInHandler,
        googleLogOuthandler,
        user,
        error
    };


}

export default useFirebase;