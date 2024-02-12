import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Login from "./Login";
import Genre from "./Genre";

export default function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  return (
    <div className="signup">
      <h1 className="mb-5 fw-bold">Signup</h1>
      <form>
        <div className="mb-3 loginInput">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
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
        <div className="mb-3 loginInput">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <Link
          type="submit"
          className="btn btn-primary bg-success mt-3 register-btn loginInput"
          onClick={() => setShowGenre(true) }

        >
          Register
        </Link>
        {showGenre ? (
                <Modal onClose={() => setShowGenre(false)}>
                  <Genre></Genre>
                </Modal>
              ) : null}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link className="text-decoration-none"
           onClick={() => setShowLogin(true) }
          >
            Login
          </Link>
          {showLogin ? (
                <Modal onClose={() => setShowLogin(false)}>
                  <Login></Login>
                </Modal>
              ) : null}
        </p>
      </form>
    </div>
  );
}
