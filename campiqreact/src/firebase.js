import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'react-toastify/dist/ReactToastify.css';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ_JGRVXeudW06p1i0EDr_G1n0uknhTUQ",
  authDomain: "campiq-a7756.firebaseapp.com",
  projectId: "campiq-a7756",
  storageBucket: "campiq-a7756.appspot.com",
  messagingSenderId: "1001837774458",
  appId: "1:1001837774458:web:b7ce2cbcd4dadfc0715dc3",
  measurementId: "G-RQPG7L8RTB"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("Welcome back!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (firstname, lastname, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db
        .collection("users")
        .doc(user.uid)
        .set({
            uid: user.uid,
            firstname,
            lastname,
            authProvider: "local",
            email,
        });
        alert("Account created!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
    alert("Goodbye!");
};

export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
    app
};