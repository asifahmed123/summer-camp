import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(false)

     const loginUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const signInUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const updateUser = (name, photoURL) => {
          return updateProfile(auth.currentUser, {
               displayName: name, photoURL: photoURL
          })
     }

     const googleSignIn = () => {
          return signInWithPopup(auth, googleProvider)
     }

     const logOut = () => {
          return signOut(auth)
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
          })
          return() => {
               unsubscribe()
          }
     },[])

     const authInfo = {
          user,
          loading,
          loginUser,
          signInUser,
          googleSignIn,
          updateUser,
          logOut
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;