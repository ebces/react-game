import React from "react";
import Button from "./Button";
import "./complexity.css";

class Complexity extends React.Component {
  render() {
    return (
      <div className="complexity">
        <Button link="easy-game" textButton="Easy" />
        <Button link="medium-game" textButton="Medium" />
        <Button link="hard-game" textButton="Hard" />
      </div>
    );
  }
}

export default Complexity;
