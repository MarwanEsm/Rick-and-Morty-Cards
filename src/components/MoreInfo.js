import React from "react";
import ShowLess from "./ShowLess";

const pStyle = {
  color: "yellow",
  fontSize: 14,
};

function MoreInfo({ character, index }) {
  return (
    <div>
      <br></br>
      <p style = {pStyle}>
        {"Status is"} {character.status}
      </p>
      <p style = {pStyle}>
        {"Species is"} {character.species}
      </p>
      <ShowLess />
    </div>
  );
}

export default MoreInfo;
