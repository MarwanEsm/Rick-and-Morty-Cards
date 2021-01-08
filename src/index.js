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
    this.flipe = this.flip.bind(this);
    this.state = {
      flipped: false,
      characterImage: null,
      characterName: null,
    };
  }

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      characterImage: data.results[0].image,
      characterName: data.results[0].name,
    });
  }

  flip(event) {
    this.setState({
      flipped: event.state.flipped,
     
    });
  }
  render() {
    return (
      <ReactCardFlip flipped={this.state.flipped} flipDirection="horizontal">
        <div>
          <img src={this.state.characterImage} alt="" />
          <button onClick={this.flip}>Click to Flip</button>
        </div>

        <div>
          <h3>{this.state.characterName}</h3>
          <button onClick={this.flip}>Click to Flip</button>
        </div>
      </ReactCardFlip>
    );
  }
}
ReactDOM.render(<FlipCard />, document.getElementById("root"));
