//TODO: STEP 1 - Import the useState hook.
import React, { Component, useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


function App(props) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(0);

  const homeTD = () => {
    setHomeScore(homeScore + 7);
  }
  const homeFG = () => {
    setHomeScore(homeScore + 3);
  }

  const awayTD = () => {
    setAwayScore(awayScore + 7);
  }
  const awayFG = () => {
    setAwayScore(awayScore + 3);
  }

  const changeQuarter = () => {
    setQuarter(quarter + 1);
  }

  return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Lions</h2>
              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:42</div>
            <div className="away">
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{awayScore}</div>
            </div>
          </div>
          <BottomRow quarter={quarter} />
        </section>
        <Buttons homeTD={homeTD} homeFG={homeFG} awayTD={awayTD} awayFG={awayFG} changeQuarter={changeQuarter} />
      </div>
  );
}

export default App;