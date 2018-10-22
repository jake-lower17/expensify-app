import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkd3d5LQ9eNelnsjYSHU3-b9tp_vlZAqk",
    authDomain: "expensify-d2b92.firebaseapp.com",
    databaseURL: "https://expensify-d2b92.firebaseio.com",
    projectId: "expensify-d2b92",
    storageBucket: "expensify-d2b92.appspot.com",
    messagingSenderId: "428482525145"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };