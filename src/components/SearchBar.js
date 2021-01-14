import React, { Component } from "react";
import ReactDOM from "react-dom";



class SearchBar extends Component {
  // // constructor(props) {
  // //   super(props);
  // //   this.changeHandler = this.changeHandler.bind(this);
  // //   this.clickHandler = this.clickHandler.bind(this);
  // //   this.state = { search: "" };
  // }

  // changeHandler(event) {
  //   this.setState({ search: event.target.value });
  //   event.preventDefault();
  // }

  // clickHandler(){} identify the function to display the researched Character

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
        {/* <input
          style={searchBoxStyling}
          type="text"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <br />
        <br />
        <button style={buttonStyling} onClick={this.clickHandler}>
          Search
        </button> */}
        
      </fieldset>
    );
  }
}

export default SearchBar;
