import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class FrontSideComponot extends Component {
  render() {
    return (
      <div className="frontSide">
        <Image />
      </div>
    );
  }
}

/*I think loop function is required here to display an image in each container*/

class Image extends Component {
  render() {
    const imageCOntainerStyle = {
      border: 4,
      borderColor: "#ff3333",
      borderRadius: 3,
    };
    return (
      <div className="image">
        <image
          style={imageCOntainerStyle}
          src={this.state.dataSource.results.image}
        />
      </div>
    );
  }
}



// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();