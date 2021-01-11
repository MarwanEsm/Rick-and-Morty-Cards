import React from "react";
import ShowLess from "./ShowLess";

function MoreInfo({ character, index }) {
  return (
    <div>
      <div>
        <p>{"spieces is define character spieces"}</p>
        <p>{"status is define character status "}</p>
      </div>
      <ShowLess />
    </div>
  );
}

export default MoreInfo;
