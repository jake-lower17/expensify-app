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

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Jake',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Aledo',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((e) => { 
//     console.log('this failed');
// });

// database.ref().update({
//     name: 'Mike',
//     age: 40,
//     job: 'progtramer',
//     isSingle: null
// });


// console.log('I made req!');
// // database.ref().set('This is my data');

// database.ref('age').set(29);

// database.ref('location/city').set('Joy');

// database.ref('isSingle').remove();