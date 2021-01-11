//import logo, { ReactComponent } from "./logo.svg";//
import "./App.css";
import { Component } from "react";
//import ReactCardFlip from "react-card-flip";//
import Cards from "./components/Card";
import Loading from "./components/Loading";

import "bootstrap/dist/css/bootstrap.min.css";




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
    const cardStyle = {
      width: 20,
      hieght: 20,
      borderColor: "red",
      borderRadius: 3,
    };
    if (this.state.characters.length === 0) {
      return <Loading />;
    } else {
      return (
        // <ReactCardFlip>
        <div>
          {this.state.characters.map((oneCharacter, index) => {
            return (
              <div>
                <Cards
                  key={oneCharacter.id}
                  character={oneCharacter}
                  index={index}
                  
                />
                
                <br />
              </div>
            );
          })}
          
        </div>
      );
      
     
      // </ReactCardFlip>
    }
  }
}

export default App;
