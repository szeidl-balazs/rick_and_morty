import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardText">
        <div className="cardName">
          <p className="subtitle">Name:</p>
          <p>{props.name}</p>
        </div>
        <div className="cardSpecies">
          <p className="subtitle">Species:</p>
          <p>{props.species}</p>
        </div>
      </div>
      <img
        className="cardImg"
        src={props.image}
        alt={props.name}
        onClick={(e) => {
          e.target.parentNode.lastElementChild.classList.toggle("charSheet");
        }}
      ></img>
      <div className="charSheet charProps">
        <div>
          <p>Name: {props.name}</p>
          <p>Species: {props.species}</p>
          <p>Gender: {props.gender}</p>
          <p>Status: {props.status}</p>
          <p>Origin: {props.origin.name}</p>
          <p>Location: {props.location.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
