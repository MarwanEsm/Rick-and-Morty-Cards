import React from "react";
import ShowLess from "./ShowLess";

function MoreInfo({ character, index }) {
  return (
    <div>
      <p>{"species is character.species does not work"}</p>
      <p>{"status is character.status does not work"}</p>
      <ShowLess />
    </div>
  );
}

export default MoreInfo;
