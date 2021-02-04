import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import Characters from "./components/characters/Characters";
import Locations from "./components/locations/Locations";

function App() {
  return (
    <div className="mainContainer">
      <LandingPage />
      <Characters />
      <Locations />
      <a href="./index.html" className="homeBtn">
        Home
      </a>
    </div>
  );
}

export default App;
