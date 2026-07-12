import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../components/Firebase/auth";
import { useAuth } from "../../contexts/authContext";

export function Login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState(""); 

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      setError(""); 
      
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (err) {
        setError("User not found or incorrect credentials!");
        setIsSigningIn(false); 
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((error) => {
        setIsSigningIn(false);
      });
    }
  };

  return (
    <div className="login-form">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <h2 className="login-form__title" style={{ color: error ? "red" : "inherit" }}>
        {error ? error : "Welcome Back"}
      </h2>
      
      <form onSubmit={onSubmit}>
        <p className="login-form__info">Please enter your details</p>
        <p className="login-form__sub">Email address</p>
        <input 
          type="email" 
          placeholder="example123@email.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="login-form__sub">Password</p>
        <input 
          type="password" 
          placeholder="qwerty1234" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        
        <button type="submit" className="login-form__button" disabled={isSigningIn}>
          {isSigningIn ? "Signing In..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default Login;