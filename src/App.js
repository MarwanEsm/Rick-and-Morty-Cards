import "./App.css";
import React, { Component } from "react";
import Cards from "./components/Cards";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.state = {
      characters: [],
      filteredCharacters: [],
      loading : false
    };
  }

  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
       this.setState({
        loading : true
       });
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      characters: data.results,
      filteredCharacters: data.results,
      loading: false
    });
  }

  searchHandler(searchValue) {
   const filteredCharacters = this.state.characters.filter(character => {
      return character.name.includes(searchValue)
   })
       this.setState({
         filteredCharacters: filteredCharacters,
       });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {

      return (
        <div>
          <div>
            <SearchBar
              style={seachBarStyle}
              searchHandler={this.searchHandler}
            />
          </div>
          <br />
          <br />

          <Row noGutters>
            {this.state.filteredCharacters.length !== 0 ? (
              this.state.filteredCharacters.map((oneCharacter, index) => {
                return (
                  <Cards
                    key={oneCharacter.id}
                    character={oneCharacter}
                    index={index}
                  />
                );
              })
            ) : (
              <h1>No data</h1>
            )}
          </Row>
        </div>
      );

      {
      }
    }
  }
}

const seachBarStyle = {textAlign : 'center'}

export default App;
