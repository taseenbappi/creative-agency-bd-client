import initalizeAuth from "../Firebase/firebase.init";
import {
    getAuth,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile

} from "firebase/auth";

import { useEffect, useState } from "react";
import axios from "axios";

initalizeAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
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
                        authError(error.message)
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

    // user email and password register hangler
    const registerHangler = (data, location, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, data.email, data.password)

            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { displayName: data.displayName, email: data.email, role: "user" };
                setUser(newUser);

                // send user info to database
                axios.post('https://glacial-gorge-61316.herokuapp.com/users', newUser)
                    .then(function (response) {

                    })
                    .catch(function (error) {
                        console.log(error);
                    });


                setAuthError("");
                const destination = location?.state?.from || "/home";
                navigate(destination);
                // user profile Update
                updateProfile(auth.currentUser, {
                    displayName: data.displayName
                }).then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred
                    setError(error.message);
                });

            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
                // ..
            }).finally(() => setIsLoading(false));
    }
    // register users login hangler
    const registerUserSignInHangler = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || "/home";

                if (email === "admin@admin.com") {
                    navigate('/dashboard');
                } else {
                    navigate(destination);
                }
                // myHistory.replace(destination);
                setAuthError("");

                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                setAuthError(errorMessage);

            }).finally(() => setIsLoading(false));
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
        registerHangler,
        registerUserSignInHangler,
        user,
        error,
        isLoading
    };


}

export default useFirebase;