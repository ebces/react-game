import React from "react";
import "./timer.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
    };
    this.stopTimer = this.stopTimer.bind(this);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.seconds < 59) {
        this.setState({ seconds: this.state.seconds + 1 });
      } else {
        this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
      }
    }, 1000);
  }

  componentDidUpdate() {
    if (this.props.stopTimer) {
      this.stopTimer();
      this.props.finishGame(`${this.state.minutes}:${this.state.seconds}`);
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <div className="timer">{`${
        this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes
      }:${
        this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds
      }`}</div>
    );
  }
}

export default Timer;
