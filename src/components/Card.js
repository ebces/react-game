import React from "react";
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isComplited: false,
      conditionClass: "",
    };
    this.changeCondition = this.changeCondition.bind(this);
    this.clearCondition = this.clearCondition.bind(this);
  }

  changeCondition() {
    this.setState({
      conditionClass: "complited-card",
      isComplited: true,
    });
  }

  clearCondition() {
    if (!this.state.isComplited) {
      this.setState({
        isClicked: false,
        conditionClass: "",
      });
    }
  }

  render() {
    return (
      <div
        className={`card ${this.state.conditionClass}`}
        onClick={() => {
          if (this.state.isClicked) return;
          this.setState({
            isClicked: true,
            conditionClass: "active-card",
          });
          this.props.click(
            this.props.alt,
            this.changeCondition,
            this.clearCondition
          );
        }}
      >
        <img src="Card_back_02a.svg" alt="back-side" className="back-side" />
        <img
          src={this.props.picture}
          alt={this.props.alt}
          className={`cardFace`}
        />
      </div>
    );
  }
}

export default Card;
