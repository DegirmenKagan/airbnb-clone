import React from "react";

export default function Hero() {
  return (
    <section className="hero--div">
      <img className="hero--img" src={require("../images/photo-grid.png")} />
      <h1 className="hero--header">Online Experiences</h1>
      <h4 className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </section>
  );
}
