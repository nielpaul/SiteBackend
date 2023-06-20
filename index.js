  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, set, res, child, push, update } from "firebase/database";
  import cors from 'cors';
  import dotenv from 'dotenv';
  import express from 'express';


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDW4rQnvJ-vH31e0u49nm4TcmkSVPw0rJE",
    authDomain: "lollywest-backend.firebaseapp.com",
    databaseURL: "https://lollywest-backend-default-rtdb.firebaseio.com/",
    projectId: "lollywest-backend",
    storageBucket: "lollywest-backend.appspot.com",
    messagingSenderId: "167182344845",
    appId: "1:167182344845:web:9951d97895db7b6624f8c4",
    measurementId: "G-1L2BQ9F0G6"
  };

  const env = dotenv.config()

  /* CONFIGURATIONS */
  const app = express();
  app.use(express.json());
  app.use(cors());

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();


  document.getElementById('waitlist-form').addEventListener('submit', submitUser);
  

  function submitUser(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phoneNumber = getInputVal('phoneNumber');
    var isPodcaster = getInputVal('isPodcaster');
    var message = getInputVal('message');

    /* Throw error if user does not fill out all of the fields */
    if (!name || !email || !phoneNumber ) {
      res.status(422).json({error: "Please complete all of the necessary fields."})
    } 

    saveUser(name, email, phoneNumber, isPodcaster, message);
    document.getElementById('waitlist-form').reset();
  }

  function saveUser(name, email, phoneNumber, isPodcaster, message, date) {
    var newUser = newUser.push();
    newUser.set({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isPodcaster: isPodcaster,
        message = message,
        date = date
    });

    // Function to get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }

  }