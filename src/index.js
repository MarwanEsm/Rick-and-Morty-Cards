import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import SearchBar from "./components/searchBar";
// import FrontSide from "./components/frontSide";
// import BackSide from "./components/backSide";
// import FlipCard from "./components/flipcard";
// import FetchData from "./components/fetchData";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class BackSide extends Component {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
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
        <a href='#' onClick={this.handleClick}>Show More</a>
      </div>
    );
  }
}

ReactDOM.render(<BackSide />, document.getElementById("root"));
// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
