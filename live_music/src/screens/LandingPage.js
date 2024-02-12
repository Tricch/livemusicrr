import React from "react";
import NavbarLP from "../components/NavbarLP";
import image from '../components/images/landingimg.jpg'

export default function LandingPage() {
  return (
    <div className="bg-lg">
      <div>
        <NavbarLP></NavbarLP>
      </div>
      <div className="overall-flex">
      <div className="title-flex">
        <h className="title-h">
          LIVE MUSIC <br /> RESTAURANT <br /> RECOMMENDATION <br /> SYSTEM
        </h>
        <span className="fs-6 fst-italic">
          "Immerse yourself in the flavors of live music and culinary delights."
        </span>
      </div>
      <div className="title-flex">
        <img src={image} alt="..." id="landing-img" />
      </div>
      </div>
    </div>
  );
}
