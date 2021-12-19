import initalizeAuth from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,

} from "firebase/auth";

import { useEffect, useState } from "react";
import axios from "axios";

initalizeAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google SignIn handle
    const googleSignInHandler = (location, navigate) => {

        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);

                axios.get(`https://glacial-gorge-61316.herokuapp.com/users/${user?.email}`)
                    .then(function (response) {
                        // handle success

                        if (response.data.message === false) {

                            axios.post('https://glacial-gorge-61316.herokuapp.com/users', {
                                displayName: user.displayName,
                                email: user.email,
                                role: "user"
                            }).then(function (response) {

                            }).catch(function (error) {
                                setError(error.message);
                            });
                        }
                        else {

                        }

                    })
                    .catch(function (error) {
                        // handle error

                    })
                    .then(function () {
                        // always executed

                    });

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setError(errorMessage);

            }).finally(function () {
                // always executed
                setIsLoading(false);
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
            setIsLoading(false);
        });
    }, [auth])

    // user profile Update
    // const profileUpdate = () => {
    //     updateProfile(auth.currentUser, {
    //         displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    //     }).then(() => {
    //         // Profile updated!

    //     }).catch((error) => {
    //         // An error occurred
    //         setError(error.message);
    //     });
    // }
    // google log out handle
    const googleLogOuthandler = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        }).finally(() => {
            setIsLoading(false);
        });
    }


    return {
        googleSignInHandler,
        googleLogOuthandler,
        user,
        error,
        isLoading
    };


}

export default useFirebase;