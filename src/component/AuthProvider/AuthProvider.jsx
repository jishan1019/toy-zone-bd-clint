import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const registerGoogle = (auth, googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginGoogle = (email, password) => {
    return signInWithPopup(auth, googleProvider);
  };

  const registerGitHub = (auth, gitProvider) => {
    return signInWithPopup(auth, gitProvider);
  };

  const loginGithub = (email, password) => {
    return signInWithPopup(auth, gitProvider);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    registerGoogle,
    user,
    logOut,
    loginUser,
    googleProvider,
    auth,
    registerGitHub,
    gitProvider,
    loginGoogle,
    loginGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
