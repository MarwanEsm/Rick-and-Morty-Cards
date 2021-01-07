import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class TestFile extends Component {


  render() {
    return (
      <div>
        <SearchBar/>
        <FlipCard/>
        
      </div>
    );
  }
}
