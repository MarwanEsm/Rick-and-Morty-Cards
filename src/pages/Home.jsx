import React, { useState, useEffect } from "react";
import CardContainer from "../components/layout/cardContainer/CardContainer";
import LoadingContent from "../components/elements/loadingContent/LoadingContent";
import Header from "../components/layout/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            const url = "https://rickandmortyapi.com/api/character/";
            const response = await fetch(url);
            const data = await response.json();
            setCharacters(data.results);
            setFilteredCharacters(data.results);
            setLoading(false);
        };
        fetchCharacters();
    }, []);

    const searchHandler = (searchValue) => {
        const filteredCharacters = characters.filter((character) =>
            character.name.includes(searchValue)
        );
        setFilteredCharacters(filteredCharacters);
    };

    return (
        <div>
            <div>
                {/* <SearchBar
                    style={searchBarStyle}
                    searchHandler={searchHandler}
                /> */}
                <Header />
            </div>

            <Row className="justify-content-center">
                {loading ? (
                    <LoadingContent />
                ) : (
                    <>
                        {filteredCharacters.length !== 0 ? (
                            filteredCharacters.map((character, index) => (
                                <CardContainer
                                    key={character.id}
                                    character={character}
                                    index={index}
                                />
                            ))
                        ) : (
                            <h1>No data</h1>
                        )}
                    </>
                )}
            </Row>
        </div>
    );
};

// const searchBarStyle = { textAlign: 'center' };

export default Home;
