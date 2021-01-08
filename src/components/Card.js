import React from "react";

function Card({ character, index }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <p>{character.name}</p>
    </div>
  );
}
export default Card;
