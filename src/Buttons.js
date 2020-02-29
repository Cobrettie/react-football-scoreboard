import React from "react";
import "./App.css";

function Buttons(props) {
  return (
    <div>
      <section className="buttons">

        <div className="scoreButtons">
          <div className="homeButtons">
            <button onClick={props.homeTD} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={props.homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>
          </div>
          <div className="awayButtons">
            <button onClick={props.awayTD} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={props.awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>
          </div>
        </div>

        <div className="extraButtons">
          <div>
            <button onClick={props.changeDown} className="downButton">Down</button>
          </div>
          <div>
            <button onClick={props.changeTogo} className="togoButton">To Go</button>
          </div>
          <div>
            <button onClick={props.changeBallOn} className="ballOnButton">Ball On</button>
          </div>
          <div>
            <button onClick={props.changeQuarter} className="quarterButton">Quarter</button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Buttons;