import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "./components/Card";
import Loading from "./components/Loading";
class App extends Component {
  constructor(props) {
    super(props);

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
    console.log("this.state.characters", this.state.characters);
    if (this.state.characters.length === 0) {
      return <Loading />;
    } else {
      return (
        // <ReactCardFlip>
        <div>
          {this.state.characters.map((oneCharacter, index) => {
            return (
              <Card
                key={oneCharacter.id}
                character={oneCharacter}
                index={index}
              />
            );
          })}

          {/* <button onClick={this.flip}>Click to Flip</button> */}
        </div>

        // </ReactCardFlip>
      );
    }
  }
}

export default App;
