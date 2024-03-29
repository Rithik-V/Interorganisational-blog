import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login({ setIsAuth }) {
  
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
export default Login;
