import React from "react";
import Card from "react-bootstrap/Card";
import ShowMore from "./ShowMore";
import "react-flex/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const cardStyle = {
  display: "grid",
  width: "12rem",
  justifyContent: "space-between",
  alignItems: "space-betweent",
  backgroundColor: "#ff3333",
  textAlign: "center",
};

const textStyle = {
  fontSize: 14,
  fontFamily: "Segoe UI",
  color: "white",
};

function Cards({ character, index }) {
  return (
    <div class="d-inline-flex p-2 bd-highlight">
      <Card
        class="p-2 bd-highlight"
        className="p-1"
        border="primary"
        style={cardStyle}
      >
        <Card.Img src={character.image} alt="" roundedCircle />
        <Card.Text style={textStyle}>{character.name}</Card.Text>
        {/* character={character} is how you pass the character to ShowMore */}
        <ShowMore character={character} />
      </Card>
    </div>
  );
}

export default Cards;
