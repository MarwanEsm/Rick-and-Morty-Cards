import React from "react";
import ShowLess from "./ShowLess";

function MoreInfo({ character, index }) {
  return (
    <div>
      <div>
        <p>{"species is define character species "}</p>
        <p>{"status is define character status "}</p>
      </div>
      <ShowLess />
    </div>
  );
}

export default MoreInfo;
