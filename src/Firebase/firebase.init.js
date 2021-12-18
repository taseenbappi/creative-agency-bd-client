import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initalizeAuth = () => {

    // Initialize Firebase
    return initializeApp(firebaseConfig);
}
export default initalizeAuth;