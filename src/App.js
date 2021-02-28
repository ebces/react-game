import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Game from "./components/Game";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="start-screen">
          <Route
            path="/"
            render={(props) => (
              <Button {...props} link="game" textButton="Let's play" />
            )}
            exact
          />
          <Route path="/game" component={Game} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
