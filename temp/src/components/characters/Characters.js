import React from "react";
import "./characters.css";
import { useCharacters, useLocations } from "../../api/useData";
import Card from "../card/Card";


function Characters() {
  const characters = useCharacters(1);
  let cardList = [];

  if (characters !== undefined && characters !== "Loading...") {
    cardList = characters.results.map((item) => <Card key={item.id} {...item} />);
  }

  return (
    <div className="characters">
      {cardList}
    </div>
  );
}


export default Characters;