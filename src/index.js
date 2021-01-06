// eslint-disable-next-line no-unused-vars
import { findAllByTitle, render } from "@testing-library/react";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

// eslint-disable-next-line no-unused-vars
import ReactDOM, { unstable_batchedUpdates } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

class PageStyle extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = { search: "" };
  }

  changeHandler(event) {
    this.setState({ search: event.target.value });
  }
  clickHandler() {}
  render() {
    const styleHeader = {
      fontFamily: "lucida sans",
      fontSize: 17,
      fontWeight: "bold",
      color: "#ff3333",
    };

    const backgroundHeader = {
      backgroundColor: "#ffff00",
    };

    const searchBoxStyling = {
      textAlign: "center",
      height: 25,
      borderRadius: 5,
    };

    const buttonStyling = {
      textAlign: "center",
    };
    return (
      <fieldset style={backgroundHeader}>
        <legend style={styleHeader}>
          Please Enter Your Favorite Character
        </legend>
        <input
          style={searchBoxStyling}
          type="text"
          value={this.state.search}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <button style={buttonStyling} onClick={this.clickHandler}>
          Search
        </button>
      </fieldset>
    );
  }
}

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
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <PageStyle />;
    } else {
      const image = this.state.dataSource.map((result) => {
        return (
          <ul>
            <li>{image}</li>
          </ul>
        );
      });
    }
  }
}

ReactDOM.render(<FetchData />, document.getElementById("root"));

// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
