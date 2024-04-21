import React, { useState, useEffect } from "react";
import CardContainer from "../components/layout/cardContainer/CardContainer";
import LoadingContent from "../components/elements/loadingContent/LoadingContent";
import Header from "../components/layout/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import WarningMessage from "../components/elements/warningMessage/WarningMessage";

const DisplayPage = () => {

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteCharacter, setFavoriteCharacter] = useState("");
  const [displayWarningMessage, setDisplayWarningMessage] = useState(false)


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
      setDisplayWarningMessage(false)
    }
  }, [favoriteCharacter]);


  const handleSearchCharacter = () => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(favoriteCharacter.toLowerCase())
    );
    if (filteredCharacters.length !== 0) {
      setCharacters(filteredCharacters);
    } else {
      setDisplayWarningMessage(true)
    }
  };


  return (
    <div style={{ overflowX: "hidden" }}>
      <Header
        onSearchCharacter={handleSearchCharacter}
        onCharacterChange={(value) => setFavoriteCharacter(value)}
        favoriteCharacter={favoriteCharacter}
      />

      {
        !displayWarningMessage ?
          <Row className="justify-content-center" style={{ padding: "0 10px 0 10px" }}>
            {
              isLoading ?
                <LoadingContent /> :
                <>
                  {
                    characters.length > 0 && characters.map((character, index) =>
                      <CardContainer
                        character={character}
                        key={index}
                        index={index}
                        onCardSelect={(value) => {
                          if (value === index && selectedCharacter === null) {
                            setSelectedCharacter(character)
                          } else {
                            setSelectedCharacter(null)
                          }
                        }}
                        isSelected={selectedCharacter?.id === character?.id}
                      />
                    )
                  }
                </>
            }
          </Row> :
          <WarningMessage text={"We could not find your favorite character"} />
      }
    </div>
  );
};



export default DisplayPage;
