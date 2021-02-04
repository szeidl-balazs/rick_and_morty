import React from "react";
import "./cardLocations.css";

function cardLocations(props) {
  return (
    <div className="cardLocations">
      <div className="cardTextLocations">
        <div className="cardNameLocations">
          <p className="subtitleLocations">Name:</p>
          <p>{props.name}</p>
        </div>
        <div className="cardTypeLocations">
          <p className="subtitleLocations">Type:</p>
          <p>{props.type}</p>
        </div>
      </div>
    </div>
  );
}

export default cardLocations;
