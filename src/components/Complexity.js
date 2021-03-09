import React from "react";
import Button from "./Button";
import "./complexity.css";

class Complexity extends React.Component {
  render() {
    return (
      <div className="complexity">
        <Button
          link="easy-game"
          textButton="Easy"
          sound="start.mp3"
          soundRepeat={false}
        />
        <Button
          link="medium-game"
          textButton="Medium"
          sound="start.mp3"
          soundRepeat={false}
        />
        <Button
          link="hard-game"
          textButton="Hard"
          sound="start.mp3"
          soundRepeat={false}
        />
      </div>
    );
  }
}

export default Complexity;
