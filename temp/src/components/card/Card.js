import React from "react";
import "./card.css";


function Card(props) {
  return(
    <div className="card">
      <div className="cardText">
        <div className="cardSpecies">
          <p className="subtitle">Species:</p> 
          <p>{props.species}</p>
        </div>
        <div className="cardName">
          <p className="subtitle">Name:</p> 
          <p>{props.name}</p>
        </div>
      </div>
      <img className="cardImg" src = {(props.image)}>
      </img>
    </div>  
  );
}

export default Card;