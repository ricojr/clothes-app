import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3-RQ9Gyl1tQ66pgLBY2B4OphFm3OlSk4",
    authDomain: "clothes-db-60d5c.firebaseapp.com",
    databaseURL: "https://clothes-db-60d5c.firebaseio.com",
    projectId: "clothes-db-60d5c",
    storageBucket: "clothes-db-60d5c.appspot.com",
    messagingSenderId: "798635907185",
    appId: "1:798635907185:web:308633a94bffd9387fe3d0",
    measurementId: "G-2DP3JV47NR"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

 if(!snapShot.exists) {
   const { displayName, email } = userAuth;
   const createdAt = new Date();

   try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
   } catch (error) {
     console.log('error creating user', error.message )
   }
  }
  return userRef;
 }




  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 