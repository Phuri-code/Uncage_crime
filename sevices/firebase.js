import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUM_hKaC4iWsfJsf3ss374spL3UhQGq3Q",
    authDomain: "uncage-crime-17b40.firebaseapp.com",
    projectId: "uncage-crime-17b40",
    storageBucket: "uncage-crime-17b40.appspot.com",
    messagingSenderId: "297134863284",
    appId: "1:297134863284:web:5067fc30c144ba7c3d38e1",
    measurementId: "G-KP4VKSMJBP"
  };
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
const firestore = firebase.firestore();// database
const fireStorage = firebase.storage();
const fireAuth= firebase.auth();

export {
  firestore,// Database
  fireStorage,// storage
  fireAuth // authentication 
}