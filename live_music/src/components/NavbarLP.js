import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Signup from "../screens/Signup";
import Login from "../screens/Login";

export default function NavbarLP() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid mx-2 ms-5 mt-1">
          <Link className="navbar-brand fs-1 fw-bold" to="/">
            LMRR
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto"></ul>
            <div className="d-flex">
              <Link
                className="nav-btn btn text-white mx-1 fs-5 fw-bold"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Link>
              {showLogin ? (
                <Modal onClose={() => setShowLogin(false)}>
                  <Login></Login>
                </Modal>
              ) : null}
              <Link
                className="nav-btn btn text-white mx-1 fs-5 fw-bold"
                onClick={() => setShowSignup(true)}
              >
                Signup
              </Link>
              {showSignup ? (
                <Modal onClose={() => setShowSignup(false)}>
                  <Signup></Signup>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
