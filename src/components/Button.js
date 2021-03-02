import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={`menu-button ${this.props.buttonClass}`}
        onClick={() => {
          if (!this.props.sound) return;
          const sound = new Audio(this.props.sound);
          if (this.props.soundRepeat) {
            sound.loop = true;
          }
          sound.play();
        }}
      >
        <Link to={this.props.link} className="menu-link">
          {this.props.textButton}
        </Link>
      </button>
    );
  }
}

export default Button;
