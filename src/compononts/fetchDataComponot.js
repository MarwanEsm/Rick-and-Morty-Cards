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

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        });
      })

      .catch((error) => {
        return <h1>{error}</h1>;
      });
  }

  render() {
    return (
      <div>
        <PageStyle />
        <FlipCard />
      </div>
    );
  }
}
