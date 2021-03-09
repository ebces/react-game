import React from "react";
import "./game.css";
import Card from "./Card.js";
import Timer from "./Timer";
import Button from "./Button";

const cards = [
  ["three", "white_deck_3_of_hearts.svg"],
  ["four", "white_deck_4_of_hearts.svg"],
  ["five", "white_deck_5_of_hearts.svg"],
  ["six", "white_deck_6_of_hearts.svg"],
  ["seven", "white_deck_7_of_hearts.svg"],
  ["eight", "white_deck_8_of_hearts.svg"],
  ["nine", "white_deck_9_of_hearts.svg"],
  ["ten", "white_deck_10_of_hearts.svg"],
  ["jack", "white_deck_jack_of_hearts.svg"],
  ["queen", "white_deck_queen_of_hearts.svg"],
  ["king", "white_deck_king_of_hearts.svg"],
  ["ace", "white_deck_ace_of_hearts.svg"],
];

const prepareCardsTostart = (arr, level) => {
  const cards = arr.slice(0, level);
  return cards.concat(cards).sort(() => Math.random() - 0.5);
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: prepareCardsTostart(cards, this.props.level),
      resultButtonClass: "result-button-hidden",
      openedCards: [],
      firstClickedCard: null,
      secondClickedCard: null,
      countClickedCards: 0,
    };
    this.onClick = this.onClick.bind(this);
    this.saveResults = this.saveResults.bind(this);
    this.showResultButton = this.showResultButton.bind(this);
    this.finishGame = this.finishGame.bind(this);
  }

  onClick(cardName, completeFunc, clearFunc) {
    if (this.state.countClickedCards === 0) {
      this.setState({
        countClickedCards: this.state.countClickedCards + 1,
        firstClickedCard: cardName,
        firstCardComplete: completeFunc,
        firstCardClear: clearFunc,
      });
    } else if (this.state.countClickedCards === 1) {
      if (this.state.firstClickedCard === cardName) {
        this.setState({
          secondClickedCard: cardName,
          openedCards: [...this.state.openedCards, cardName],
          countClickedCards: this.state.countClickedCards + 1,
          secondCardComplete: completeFunc,
          secondCardClear: clearFunc,
        });
      } else {
        this.setState({
          secondClickedCard: cardName,
          countClickedCards: this.state.countClickedCards + 1,
          secondCardComplete: completeFunc,
          secondCardClear: clearFunc,
        });
      }
    } else {
      this.state.firstCardClear();
      this.state.secondCardClear();

      this.setState({
        countClickedCards: 1,
        firstClickedCard: cardName,
        firstCardComplete: completeFunc,
        firstCardClear: clearFunc,
        secondClickedCard: null,
        secondCardComplete: null,
        secondCardClear: null,
      });
    }
  }

  showResultButton() {
    this.setState({
      resultButtonClass: "result-button",
    });
  }

  saveResults(time) {
    switch (this.props.level) {
      case 6:
        localStorage.setItem("Easy", time);
        break;
      case 9:
        localStorage.setItem("Medium", time);
        break;
      case 12:
        localStorage.setItem("Hard", time);
        break;
      default:
        break;
    }
  }

  finishGame(time) {
    this.saveResults(time);
    setTimeout(() => {
      this.showResultButton();
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.openedCards.includes(this.state.secondClickedCard)) {
      this.state.firstCardComplete();
      this.state.secondCardComplete();
    }
  }

  render() {
    return (
      <div className="playing-field">
        <Button
          buttonClass={this.state.resultButtonClass}
          textButton="Results"
          link="result"
        />
        {this.state.cards.map(([cardName, picture], index) => {
          return (
            <Card
              key={index}
              picture={picture}
              alt={cardName}
              click={this.onClick}
            />
          );
        })}
        <Timer
          stopTimer={this.state.openedCards.length === this.props.level}
          finishGame={this.finishGame}
        />
      </div>
    );
  }
}

export default Game;
