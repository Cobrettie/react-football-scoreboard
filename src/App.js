//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  let [down, setDown] = useState(1);
  let [togo, setTogo] = useState(0);
  let [ballOn, setBallOn] = useState(0);
  let [quarter, setQuarter] = useState(1);

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

  const changeDown = () => {
    setDown(down >= 4 ? down = 1 : down + 1);
  }

  const changeTogo = () => {
    setTogo(togo >= 99 ? togo = 0 : togo + 1);
  }

  const changeBallOn = () => {
    setBallOn(ballOn >= 50 ? ballOn = 0 : ballOn + 1);
  }

  const changeQuarter = () => {
    setQuarter(quarter >= 4 ? quarter = 1 : quarter + 1);
  }

  return (
      <div className="container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Lions</h2>
              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:00</div>
            <div className="away">
              <h2 className="away__name">Tigers</h2>
              <div className="away__score">{awayScore}</div>
            </div>
          </div>
          <BottomRow quarter={quarter} down={down} togo={togo} ballOn={ballOn} />
        </section>
        <Buttons homeTD={homeTD} homeFG={homeFG} awayTD={awayTD} awayFG={awayFG} changeDown={changeDown} changeTogo={changeTogo} changeBallOn={changeBallOn} changeQuarter={changeQuarter} />
      </div>
  );
}

export default App;
