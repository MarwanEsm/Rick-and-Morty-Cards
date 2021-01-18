import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.showResultHandler = this.showResultHandler.bind(this);
    this.state = {
      fCharacter: "",
    };
  }

  changeHandler(event) {
    event.preventDefault();
    this.setState({ fCharacter: event.target.value });
  }

  showResultHandler() {
    this.props.searchHandler(this.state.fCharacter);
  }

  render() {
    return (
      <div>
        <fieldset style={backgroundHeader}>
          <legend style={styleHeader}>
            Please Enter Your Favorite Character
          </legend>
          <input
            style={searchBoxStyling}
            type="text"
            value={this.state.fCharacter}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <button style={buttonStyling} onClick={this.showResultHandler}>
            Search
          </button>
        </fieldset>
      </div>
    );
  }
}

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
export default SearchBar;
