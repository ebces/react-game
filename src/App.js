import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/Game";
import Button from "./components/Button";
import Complexity from "./components/Complexity";
import Result from "./components/Result";
import Description from "./components/Description";

const EASY_LEVEL = 6;
const MEDIUM_LEVEL = 9;
const HARD_LEVEL = 12;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="start-screen">
          <Route
            path="/"
            render={(props) => (
              <Button
                {...props}
                link="complexity"
                textButton="Let's play"
                buttonClass="button-shift"
                sound="sound1.mp3"
                soundRepeat={true}
              />
            )}
            exact
          />
          <Route path="/complexity" component={Complexity} />
          <Route
            path="/easy-game"
            render={(props) => <Game {...props} level={EASY_LEVEL} />}
          />
          <Route
            path="/medium-game"
            render={(props) => <Game {...props} level={MEDIUM_LEVEL} />}
          />
          <Route
            path="/hard-game"
            render={(props) => <Game {...props} level={HARD_LEVEL} />}
          />
          <Route path="/result" component={Result} />
          <Description />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
