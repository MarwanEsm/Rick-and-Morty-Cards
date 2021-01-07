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
  // clickHandler() {} the function should display the reasearched character

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

class FrontSideComponot extends Component {
  render() {
    return (
      <div className="frontSide">
        <Image />
      </div>
    );
  }
}

/*I think here a loop function is required to display image in each container*/

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

class FlipCard extends Component {
  constructor(props) {
    super(props);

    this.state = { flipped: false };
    this.flipe = this.flip.bind(this);
  }
  flip() {
    this.setState({ flipped: this.state.flipped });
  }
  render() {
    return (
      <div onFirstClick={this.flip} onSecondClic={this.state.flipped}>
        ;
        <FrontSideComponot />
        <BackSideComponot />
      </div>
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

ReactDOM.render(<FetchData />, document.getElementById("root"));

// ========================================

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
