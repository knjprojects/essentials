import { initializeApp,getApps } from "firebase/app";

//these work when using app as parameter, then usen the return value as paramters for our react-firebase-hooks, i think
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import {
  
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";


import {
  
 
  /*query,
  getDocs,
  collection,
  where,
  addDoc*/
} from "firebase/firestore";
import { initializeAuth} from "firebase/auth";

import {PersistGate,configurePersist} from 'zustand-persist'
import AsyncStorage from "@react-native-community/async-storage";

const { persist, purge } = configurePersist({
  storage: AsyncStorage,//localStorage, // use `AsyncStorage` in react native
  rootKey: 'root', // optional, default value is `root`
})
export const firebaseConfig = {
    //change these to expo constants
    apiKey: "AIzaSyBKwiPzl5aHfkWvyPyABaL2Cz1i-kBsoDU",
    authDomain: "essentials-9a57d.firebaseapp.com",
    projectId: "essentials-9a57d",
    storageBucket: "essentials-9a57d.appspot.com",
    messagingSenderId: "247013967931",
    appId: "1:247013967931:web:fa070cbbd1d26c9810b41e",
    measurementId: "G-VHCJBPEF0Q"
};

//initializeApp(firebaseConfig)
export const app=getApps().length==1? getApps()[0] : initializeApp(firebaseConfig,'essentials')
//const analytics = getAnalytics(app);
export const auth =initializeAuth(app, {
  
});
  /*const readUserData = async (userId:any) => {
  try {
    const userRef = db.collection('users').doc(userId);
    const userData = await userRef.get();
  
    if (userData.exists) {
    return userData.data();
    } else {
    throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error reading user data:', error);
    throw error;
  }
  };


*/

//firebase.auth().useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');




/*signInWithPopup(auth, provider)
  .then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // ...
  }).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  // ...
  });*/


/*const signInWithGoogle = async () => {
  try {
  const res = await signInWithPopup(auth, googleProvider);
  const user = res.user;

  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    await addDoc(collection(db, "Users"), {
    uid: user.uid,
    name: user.displayName,
    authProvider: "google",
    email: user.email,
    });
  }
  } catch (err:any) {
  console.error(err);
  console.log('sign in wity googlke popup failed')
  alert(err.message);
  }
};
*/



//const analytics = getAnalytics(app);
//export {app,firebaseConfig,auth,db,googleProvider,readUserData}