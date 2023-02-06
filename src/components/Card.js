import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img className="card--img" src={require(`../images/${props.img}`)} />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span className="card--pointText"> {props.rating}</span>
        <span className="gray">({props.reviewCount}) ∙ </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price} </span> / person
      </p>
    </div>
  );
}
