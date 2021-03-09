import React from "react";
import "./description.css";

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <a
          href="https://github.com/ebces"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          GitHub
        </a>
        -2021
        <img src="rs_school_js.svg" alt="rs-school-logo" className="logo" />
        <a
          href="https://rs.school/js/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Rs-School
        </a>
      </div>
    );
  }
}

export default Description;
