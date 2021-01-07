import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReactCardFlip from "react-card-flip";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

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
      <ReactCardFlip>
        <FrontSide onClick={this.flip} flipDirection="horizontal" />
        <BackSide onClick={this.flip} flipDirection="horizontal" />
      </ReactCardFlip>
    );
  }
}
ReactDOM.render(<FlipCard />, document.getElementById("root"));
