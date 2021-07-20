import firebase from "firebase/app";


// Optionally import the services that you want to use
import "firebase/auth";
// //import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// let app;

// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app();
// }

// const db = firebase.firestore();
// const auth = firebase.auth();


// export { db, auth };

export default app;