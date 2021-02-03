import React from "react";
import "./characters.css";
import { useCharacters, useLocations } from "../../api/useData";
import Card from "../card/Card";
import Paginator from "../pagination/Pagination";


function Characters() {
  
  const characters = useCharacters(1);
  let cardList = [];

  if (characters !== undefined && characters !== "Loading...") {
    cardList = characters.results.map((item) => <Card key={"char-" + item.id} {...item} />); //item a character array található object, az object ID-ja legyen a key, a spread operator az összes kulcs-érték párt áthozza az arraybe
  }

  return (
    <div className="characters">
      {cardList}
      <Paginator />
    </div>
  );
}


export default Characters;