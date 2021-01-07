import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class FlipCard extends Component {
  constructor(props) {
    super(props);

    this.state = { flipped: false };
    this.flipe = this.flip.bind(this);
  }
  flip() {
    this.setState({ flipped: this.state.flipped });
  }
  render() {
    return (
      <div onFirstClick={this.flip} onSecondClic={this.state.flipped}>
        ;
        <FrontSideComponot />
        <BackSideComponot />
      </div>
    );
  }
}