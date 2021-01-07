import ReactDOM from "react-dom";
import App from "./App";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SearchBar from "./components/searchBar";
import FlipCard from "./components/flipCard";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <FlipCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
