import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <button className="menu-button">
        <Link to={this.props.link} className="menu-link">
          {this.props.textButton}
        </Link>
      </button>
    );
  }
}

export default Button;
