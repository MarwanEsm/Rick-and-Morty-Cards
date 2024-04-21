import React, { useState, useEffect } from "react";
import CardContainer from "../components/layout/cardContainer/CardContainer";
import LoadingContent from "../components/elements/loadingContent/LoadingContent";
import Header from "../components/layout/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

const DisplayPage = () => {

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [favoriteCharacter, setFavoriteCharacter] = useState("");


    useEffect(() => {
        const fetchCharacters = async () => {
            setIsLoading(true);
            const url = "https://rickandmortyapi.com/api/character/";
            const response = await fetch(url);
            const data = await response.json();
            setCharacters(data.results);
            setIsLoading(false);
        };
        if (favoriteCharacter === "") {
            fetchCharacters();
        }
    }, [favoriteCharacter]);


    const handleSearchCharacter = () => {
        const filteredCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(favoriteCharacter.toLowerCase())
        );
        setCharacters(filteredCharacters);
    };


    return (
        <div>
            <Header
                onSearchCharacter={handleSearchCharacter}
                onCharacterChange={(value) => setFavoriteCharacter(value)}
                favoriteCharacter={favoriteCharacter}
            />

            <Row className="justify-content-center" style={{ padding: "0 10px 0 10px" }}>

                {
                    isLoading ? <LoadingContent /> :
                        <>
                            {
                                characters.length > 0 && characters.map((character, index) =>
                                    <CardContainer
                                        character={character}
                                        key={index}
                                        index={index}
                                        onCardSelect={(value) => console.log(value)}
                                    />
                                )
                            }
                        </>
                }

            </Row>
        </div>
    );
};



export default DisplayPage;
