import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Carousal></Carousal>
      </div>
      <div className="my-3 mx-5 container row">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
