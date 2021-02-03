import React from "react";
import Description from '../description/Description';
import './landingPage.css';
import logo from '../../images/rick_and_morty.jpg';

function showCharCards() {
  const _landingPage = document.querySelector('.landingPage');
  const _characters = document.querySelector('.characters');
  _landingPage.style.visibility = 'hidden';
  _characters.style.visibility = 'visible';
}

/*function showLocCards() {
  const _landingPage = document.querySelector('.landingPage');
  //const _locations = document.querySelector('.locations');
  _landingPage.style.visibility = 'hidden';
  _locations.style.visibility = 'visible';
}*/


function LandingPage() {
  return(
    <div className="landingPage">
      <img src={logo} />
      <div className="button-wrapper">
        <button className="btn-char" onClick={showCharCards} >Characters</button>
        <button className="btn-loc" >Locations</button>
      </div>
      <Description />
    </div>
  );
}

export default LandingPage;

