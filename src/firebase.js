import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {  apiKey: "AIzaSyDALOFJQuiJlJAzuIGRTFvR2isBB09uGgw",
authDomain: "exercice-4-20eaf.firebaseapp.com",
projectId: "exercice-4-20eaf",
storageBucket: "exercice-4-20eaf.appspot.com",
messagingSenderId: "8674188785",
appId: "1:8674188785:web:371f2f4533f7e638df3850",
measurementId: "G-1CQ9T5HKJZ"
  
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();


