import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

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
               // set jwt access token //
               if (currentUser) {
                    axios.post('https://assignment-12-server-two-xi.vercel.app/jwt', { email: currentUser?.email })
                         .then(data => {
                              localStorage.setItem('access_token', data.data.token)
                              setLoading(false)
                         })
               }
               else {
                    localStorage.removeItem('access_token')
               }
          })
          return () => {
               unsubscribe()
          }
     }, [])

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