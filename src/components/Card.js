import React from "react";
import Card from "react-bootstrap/Card";

import ShowMore from "./ShowMore";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ character, index }) {
  return (
    <div>
      <Card className="text-center" border="primary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={character.image} alt="" roundedCircle />
        <Card.Text>{character.name}</Card.Text>
        <ShowMore />
      </Card>
    </div>
  );
}

export default Cards;
