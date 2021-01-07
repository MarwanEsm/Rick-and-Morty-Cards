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
class BackSideComponot extends Component {
  constructor(props) {
    super(props);
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.state = { showmore: "" };
  }

  /*showMoreHandler() {did not know how to use this function to display the bigger picture and show more details

  }*/

  render() {
    return (
      <div className="backSide">
        <p>{this.state.dataSource.results.name}</p>
        <button onClick={this.showMoreHandler}>Show More</button>
      </div>
    );
  }
}