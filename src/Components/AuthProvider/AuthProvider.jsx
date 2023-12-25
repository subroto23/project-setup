import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
import UseAxiosPublic from "../../Hookes/UseAxiosPublic";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //User Registations
  const handleRegistation = async ({ email, password }) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  //Login User
  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };
  //Sign Out
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Google Login
  const handleGLogin = async () => {
    setLoading(true);
    return await signInWithPopup(auth, provider);
  };

  //Auth State Changes
  useEffect(() => {
    const axiosPublic = UseAxiosPublic();
    const unSubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          await axiosPublic
            .post("/api/users", { email: currentUser?.email })
            .then(async (res) => {
              // Token Send TO the Localhost
              if (res?.data?.token) {
                localStorage.setItem("access_token", res?.data?.token);
                setLoading(false);
              }
              setLoading(false);
            });
        } else {
          localStorage.removeItem("access_token");
          setUser(null);
          setLoading(false);
        }
        return () => unSubscribe();
      },
      []
    );
  });

  //Update User
  const handleUpdateUser = async (name, photoUrl) => {
    console.log(name, photoUrl);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //Pass Provider Value Of Object
  const authInfo = {
    user,
    loading,
    handleRegistation,
    handleUpdateUser,
    handleLogin,
    handleGLogin,
    handleLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
