
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyC095W-7-98BQghS2PhZAu4gBGKtRJ40Sk",
    authDomain: "caregivers-4728e.firebaseapp.com",
    projectId: "caregivers-4728e",
    storageBucket: "caregivers-4728e.appspot.com",
    messagingSenderId: "345281993867",
    appId: "1:345281993867:web:71a4bef3af610ed44c088e",
    measurementId: "G-5T4W5S9GL1"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const Provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, Provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./oi.html";

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  })