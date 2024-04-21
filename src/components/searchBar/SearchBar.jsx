import React, { useState } from "react";


const SearchBar = () => {
    const [favoriteCharacter, setFavoriteCharacter] = useState("");

    const changeHandler = (event) => {
        event.preventDefault();
        setFavoriteCharacter(event.target.value);
    }


    return <input
        type="text"
        value={favoriteCharacter}
        onChange={changeHandler}
    />


}

export default SearchBar;
