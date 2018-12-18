import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var config = {
    apiKey: "AIzaSyAWs7zixnPWpLX6G3b9EMAXF5OtI7kEYh0",
    authDomain: "vuejs-firebase-01-21041.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-01-21041.firebaseio.com",
    projectId: "vuejs-firebase-01-21041",
    storageBucket: "vuejs-firebase-01-21041.appspot.com",
    messagingSenderId: "101143222994"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();
