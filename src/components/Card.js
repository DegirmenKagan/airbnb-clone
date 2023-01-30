import React from "react";
import katieZaferes from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img className="card--img" src={katieZaferes} />
      <div className="card--info">
        <img className="card--star" src={star} />
        <span className="card--pointText"> 5.0</span>
        <span className="gray">(6) ∙ </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136 </span> / person
      </p>
    </div>
  );
}
