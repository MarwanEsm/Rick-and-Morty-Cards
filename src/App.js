//import logo, { ReactComponent } from "./logo.svg";//
import "./App.css";
import React, { Component } from "react";
//import ReactCardFlip from "react-card-flip";//
import Cards from "./components/Cards";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    // this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      // flipped: false,
      characters: [],
    };
    // this.flipe = this.flip.bind(this);
  }
  // flip() {
  //   this.setState({ flipped: this.state.flipped });
  // }

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      // flipped: true,
      characters: data.results,
    });
  }

  render() {
    if (this.state.characters.length === 0) {
      return <Loading />;
    } else {
      return (
        <div>
          <div>
            <SearchBar />
          </div>
          <br />
          <br />
          {/* // <ReactCardFlip> */}
          <Row noGutters>
            {this.state.characters.map((oneCharacter, index) => {
              return (
                <Cards
                  key={oneCharacter.id}
                  character={oneCharacter}
                  index={index}
                />
              );
            })}
          </Row>
        </div>
      );

      {
        /* // </ReactCardFlip> */
      }
    }
  }
}

export default App;
