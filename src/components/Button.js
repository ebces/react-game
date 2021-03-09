import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    const { sound, soundRepeat } = this.props;
    if (!sound) return;

    const newSound = new Audio(this.props.sound);

    if (soundRepeat) {
      newSound.loop = true;
    }

    newSound.play();
  }

  render() {
    const { buttonClass, link, textButton } = this.props;

    return (
      <button className={`menu-button ${buttonClass}`} onClick={this.playSound}>
        <Link to={link} className="menu-link">
          {textButton}
        </Link>
      </button>
    );
  }
}

export default Button;
