// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDquBbgHhJLji9_UICr2dU7tqVR8BuXwKo",
    authDomain: "ema-john-simple-2f25c.firebaseapp.com",
    projectId: "ema-john-simple-2f25c",
    storageBucket: "ema-john-simple-2f25c.appspot.com",
    messagingSenderId: "161228695631",
    appId: "1:161228695631:web:5b076a2f1a177182c2a23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;