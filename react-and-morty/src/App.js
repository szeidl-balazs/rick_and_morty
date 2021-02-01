import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Description from "./components/description/description";


function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return(
    <div className="landingPage">
      <div className="button-wrapper">
        <button className="btn-char" onMouseDown={showDescript} onMouseUp={hideDescript}>Characters</button>
        <button className="btn-loc" onMouseDown={showDescript} onMouseUp={hideDescript}>Locations</button>
      </div>
      <Description />
    </div>
  );
  
  function showDescript() {
    const _descript = document.querySelector('.descript');
    _descript.style.visibility = 'visible';
  }

  function hideDescript() {
    const _descript = document.querySelector('.descript');
    _descript.style.visibility = 'hidden';
  }
}

export default App;
