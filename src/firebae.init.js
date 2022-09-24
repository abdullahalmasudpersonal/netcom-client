// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUyyNjJ8Kh56zXo38MYM7eG_QcK2ijZXM",
    authDomain: "netcom1.firebaseapp.com",
    projectId: "netcom1",
    storageBucket: "netcom1.appspot.com",
    messagingSenderId: "853731878196",
    appId: "1:853731878196:web:8a409d41002d9acb7fb161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;