import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class BackSide extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    state = {
      isLoading: true,
      characterName: null,
    };
  }
  /*handleClick(){} use this function to display a bigger image with more details*/
  /* displays name etc of a specific characte, should we do a loop?*/

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      characterName: data.results[0].name,
      isLoading: false,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.characterName}</h3>
        <a href="#" onClick={this.handleClick}>
          Show More
        </a>
      </div>
    );
  }
}

ReactDOM.render(<BackSide />, document.getElementById("root"));
