import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../../components/Firebase/auth";
import { useAuth } from "../../contexts/authContext";

export function SignUp() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) return;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsRegistering(true);
    setError("");

    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (err) {
      const friendlyMessage = err.message?.includes("auth/email-already-in-use")
        ? "This email is already registered!"
        : "Failed to create an account. Please try again.";

      setError(friendlyMessage);
      setIsRegistering(false);
    }
  };

  return (
    <div className="signup-form">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <h2
        className="signup-form__title"
        style={{ color: error ? "red" : "inherit" }}
      >
        {error ? error : "Create Account"}
      </h2>

      <form onSubmit={onSubmit}>
        <p className="signup-form__info">
          Please enter your details to sign up
        </p>

        <p className="signup-form__sub">Email address</p>
        <input
          type="email"
          placeholder="example123@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <p className="signup-form__sub">Password</p>
        <input
          type="password"
          placeholder="Min 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="signup-form__sub">Confirm Password</p>
        <input
          type="password"
          placeholder="Repeat your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="signup-form__button"
          disabled={isRegistering}
        >
          {isRegistering ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="signup-form__footer">
          Already have an account?{" "}
          <Link to="/login" className="signup-form__link">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
