import React from "react";
import "./result.css";
import Button from "./Button";

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      easy: localStorage.getItem("Easy") || "00:00",
      medium: localStorage.getItem("Medium") || "00:00",
      hard: localStorage.getItem("Hard") || "00:00",
    };
  }
  render() {
    return (
      <div className="result">
        <div className="result-table">
          <h2 className="title">Last result</h2>
          <p className="result-string">Easy {this.state.easy}</p>
          <p className="result-string">Medium {this.state.medium}</p>
          <p className="result-string">Hard {this.state.hard}</p>
        </div>
        <Button link="complexity" textButton="Let's play" />
      </div>
    );
  }
}

export default Result;
