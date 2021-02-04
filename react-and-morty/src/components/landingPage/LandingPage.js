import React from "react";
import Description from "../description/Description";
import "./landingPage.css";
import logo from "../../images/rick_and_morty.jpg";

function showCharCards() {
  const _landingPage = document.querySelector(".landingPage");
  const _characters = document.querySelector(".characters");
  const _descript = document.querySelector(".descript");
  const _paginationCharacters = document.querySelector(".paginationCharacters");

  _landingPage.style.display = "none";
  _descript.style.display = "none";
  _characters.style.display = "flex";
  _paginationCharacters.style.display = "flex";
}

function showLocCards() {
  const _landingPage = document.querySelector(".landingPage");
  const _locations = document.querySelector(".locations");
  const _descript = document.querySelector(".descript");
  const _paginationLocations = document.querySelector(".paginationLocations");

  _landingPage.style.display = "none";
  _descript.style.display = "none";
  _locations.style.display = "flex";
  _paginationLocations.style.display = "flex";
}

function LandingPage() {
  return (
    <div className="landingPage">
      <img src={logo} alt="logo" />
      <div className="button-wrapper">
        <button className="btn-char" onClick={showCharCards}>
          Characters
        </button>
        <button className="btn-loc" onClick={showLocCards}>
          Locations
        </button>
      </div>
      <Description />
    </div>
  );
}

export default LandingPage;
