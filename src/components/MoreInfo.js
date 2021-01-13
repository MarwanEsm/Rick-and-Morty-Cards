import React from "react";
import ShowLess from "./ShowLess";
// in MoreInfo you are destructuring the props and directly extracting character
function MoreInfo({ character, index }) {
  return (
    <div>
      {/* and here you use it */}
      <p>{character.name}</p>
      <p>{"status is character.status does not work"}</p>
      <ShowLess />
    </div>
  );
}

export default MoreInfo;
