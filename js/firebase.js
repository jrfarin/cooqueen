// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr2MlzDxuOdVQ4kCjfELaoU5oAiYaKMpo",
  authDomain: "cooqueen-34c7b.firebaseapp.com",
  projectId: "cooqueen-34c7b",
  storageBucket: "cooqueen-34c7b.appspot.com",
  messagingSenderId: "687985568824",
  appId: "1:687985568824:web:58dc59c9da72cc86c40acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTHENTICATION
const auth = getAuth(app);

const login = document.querySelector('#login');
const logout = document.querySelector('#logout');
const loginForm = document.querySelector('#loginForm');
const mainRecipes = document.querySelector('#mainRecipes');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginMail = document.querySelector('#loginMail').value; 
    const loginPassword = document.querySelector('#loginPassword').value;

    signInWithEmailAndPassword(auth, loginMail, loginPassword)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        login.classList.add('d-none');
        mainRecipes.classList.add('d-block');
        console.log('signed')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
});

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout success')
        login.classList.remove('d-none');
        mainRecipes.classList.remove('d-block');
        loginForm.reset();     
    })
    .catch((error) => {
        console.log('An error happened');
    });
});



