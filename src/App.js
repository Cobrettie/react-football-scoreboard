//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  let [down, setDown] = useState(0);
  let [togo, setTogo] = useState(0);
  let [ballOn, setBallOn] = useState(0);
  let [quarter, setQuarter] = useState(0);

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
    setDown(down + 1);
    if (down >= 4) {
      setDown(down = 0);
    }
  }

  const changeTogo = () => {
    setTogo(togo + 1);
    if (togo >= 99) {
      setTogo(togo = 0);
    }
  }

  const changeBallOn = () => {
    setBallOn(ballOn + 1);
    if (ballOn >= 50) {
      setBallOn(ballOn = 0);
    }
  }

  const changeQuarter = () => {
    setQuarter(quarter + 1);
    if (quarter >= 4) {
      setQuarter(quarter = 0);
    }
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