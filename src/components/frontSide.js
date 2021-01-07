import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class FrontSide extends Component {
  state = {
    isLoading: true,
    characterImage: null,
  };
  /* displays name, image, ..etc of a specific characte, should we do a loop?*/

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      characterImage: data.results[0].image,
      isLoading: false,
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.characterImage} />
      </div>
    );
  }
}



