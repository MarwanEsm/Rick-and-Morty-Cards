import React from "react";

const SearchBar = ({ onCharacterChange, favoriteCharacter }) =>
    <input
        type="text"
        value={favoriteCharacter}
        onChange={(event) => onCharacterChange(event.target.value)}
    />


export default SearchBar;
