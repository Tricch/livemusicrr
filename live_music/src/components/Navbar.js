import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid mx-1 ms-4">
          <Link className="navbar-brand fs-1 fw-bold" to="/home">
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
            <ul className="navbar-nav mx-auto">

            </ul>
            <div className="d-flex">
                <Link className="nav-btn btn text-danger bg-white mx-1 fs-5 fw-bold" to="/">
                  Logout
                </Link>                              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
