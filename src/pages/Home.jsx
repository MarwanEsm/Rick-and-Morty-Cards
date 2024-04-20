import React, { Component } from "react";
import CardContainer from "../components/layout/cardContainer/CardContainer";
import LoadingContent from "../components/loadingContent/LoadingContent";
import Header from "../components/layout/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
        this.state = {
            characters: [],
            filteredCharacters: [],
            loading: false
        };
    }

    async componentDidMount() {
        const url = "https://rickandmortyapi.com/api/character/";
        this.setState({
            loading: true
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
            return <LoadingContent />;
        } else {

            return (
                <div>
                    <div>
                        {/* <SearchBar
                            style={searchBarStyle}
                            searchHandler={this.searchHandler}
                        /> */}
                        <Header />
                    </div>
                    <br />
                    <br />

                    <Row noGutters>
                        {this.state.filteredCharacters.length !== 0 ? (
                            this.state.filteredCharacters.map((character, index) => {
                                return (
                                    <CardContainer
                                        key={character.id}
                                        character={character}
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
        }
    }
}

const searchBarStyle = { textAlign: 'center' }

export default Home;
