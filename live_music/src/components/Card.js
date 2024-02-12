import React from "react";

export default function Card() {
  return (
    <div className="my-3 col-12 col-md-6 col-lg-3">
      <div className="card rounded" style={{ maxWidth: "300px", maxHeight: "20rem"}}>
        <img src="https://trustnp.com/wp-content/uploads/2023/11/Purple-Haze-Rock-Bar-live-concert-1024x576.jpg.webp" className="card-img-top object-fit-contain" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Restaurant Name</h5>
          <p className="card-text">
            Description of Restaurant
          </p>
        </div>
      </div>
    </div>
  );
}
