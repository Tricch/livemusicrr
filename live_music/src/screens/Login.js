import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Modal from "../Modal";

export default function Login() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="signup">
      <h1 className="mb-5 fw-bold">Login</h1>
      <form>
        <div className="mb-3 loginInput">
          <input
            type="email"
            className="form-control"
            placeholder="Email address"
          />
        </div>
        <div className="mb-3 loginInput">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <Link to={'/home'}>
        <button
          type="submit"
          className="btn btn-primary rex bg-success mt-3 register-btn loginInput"
        >
          Signin
        </button>
        </Link>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link className="text-decoration-none" onClick={() => setShowSignup(true)}>
            Signup
          </Link>
          {showSignup ? (
                <Modal onClose={() => setShowSignup(false)}>
                  <Signup></Signup>
                </Modal>
              ) : null}
        </p>
      </form>
    </div>
  );
}
