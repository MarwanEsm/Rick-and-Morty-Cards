import React, { useState, useEffect } from "react";
import CardContainer from "../components/layout/cardContainer/CardContainer";
import LoadingContent from "../components/elements/loadingContent/LoadingContent";
import Header from "../components/layout/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row } from "react-bootstrap";

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            const url = "https://rickandmortyapi.com/api/character/";
            const response = await fetch(url);
            const data = await response.json();
            setCharacters(data.results);
            setIsLoading(false);
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

                {
                    isLoading ? <LoadingContent /> :
                        <>
                            {
                                characters.length > 0 && characters.map((character, index) =>
                                    <CardContainer character={character} key={index} />
                                )
                            }
                        </>
                }

            </Row>
        </div>
    );
};

// const searchBarStyle = { textAlign: 'center' };

export default Home;
