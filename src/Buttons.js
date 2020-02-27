import React, { Component, useState } from "react";
import "./App.css";

function Buttons(props) {
  return (
    <div>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={props.homeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={props.homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={props.awayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={props.awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
          {/* <button onClick={changeQuarter} className="quarterButton">Quarter</button> */}
        </div>
      </section>
    </div>
  );
}

export default Buttons;