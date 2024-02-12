import React, { useState } from "react";
import Login from "./Login";
import Modal from "../Modal";

export default function Genre() {
    const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="genre">
      <h1>Select Your Music Genre:</h1>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Soft pop/rock
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Acoustic
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Ambient
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Classical
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Instrumental
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Jazz
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary bg-success mt-4 loginInput"
          onClick={() => setShowLogin(true)}
        >
          Submit
        </button>
        {showLogin ? (
                <Modal onClose={() => setShowLogin(false)}>
                  <Login></Login>
                </Modal>
              ) : null}
      </div>
    </div>
  );
}
