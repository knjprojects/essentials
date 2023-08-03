import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { initializeApp,getApps } from "firebase/app";
import { firebaseConfig } from "../utils/firebase";
//if(getApps().length==0){
    initializeApp(firebaseConfig,'essentials')

//const auth = getAuth();
import { auth } from "../utils/firebase";
const myAuth=auth
export function useAuth() {
  const [user, setUser] = React.useState<User>();
 
  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(myAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}