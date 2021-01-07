import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import React, { useState } from 'react';
// import SearchBar from "./components/searchBar";
import FrontSide from "./components/frontSide";
import BackSide from "./components/backSide";
import ReactCardFlip from "react-card-flip";
// import FlipCard from "./components/flipcard";
// import FetchData from "./components/fetchData";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(fals);
  const handleClick = () => {
    this.setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
      <FrontSide />
      <button onClick={this.handleClick} />
      <BackSide />

      <button onClick={this.handleClick} />
    </ReactCardFlip>
  );
};
ReactDOM.render(<FlipCard />, document.getElementById("root"));
