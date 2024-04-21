import React from "react";
import { Button as SearchButton } from "reactstrap";

const Button = ({ onSearchCharacter }) =>
    <SearchButton color="danger" onClick={onSearchCharacter}>
        Find!
    </SearchButton>

export default Button