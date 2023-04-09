const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  form.submit();
});
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB96o6uX7t56qM_fbYlbiEjzP7IXHHBqyc",

  authDomain: "twitter-clone-official.firebaseapp.com",

  projectId: "twitter-clone-official",

  storageBucket: "twitter-clone-official.appspot.com",

  messagingSenderId: "574757579990",

  appId: "1:574757579990:web:ac501b607f0231ae452d77",

  measurementId: "G-YEPC94PGFJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
