//TODO: STEP 1 - Import the useState hook.
import React, { Component, useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";


function App(props) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeTouchdown = () => {
    setHomeScore(homeScore + 7);
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
          <BottomRow />
        </section>
        <Buttons homeTouchdown={homeTouchdown}/>
      </div>
  );
}

export default App;





{/* <section className="buttons">
  <div className="homeButtons"> */}
    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
    {/* <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
    <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
  </div>
  <div className="awayButtons">
    <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
    <button onClick={awayFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
  </div>
  <div>
    <button onClick={changeQuarter} className="quarterButton">Quarter</button>
  </div>
</section> */}