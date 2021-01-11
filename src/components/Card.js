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

const divStyle = {
  display: "flex",
  justifyContent: "space_between",
  flexDirection: "row",
};
function Cards({ character, index }) {
  return (
    <div style={divStyle}>
      <Card className="p-2" border="primary" style={cardStyle}>
        <Card.Img src={character.image} alt="" roundedCircle />
        <Card.Text style={textStyle}>{character.name}</Card.Text>
        <ShowMore />
      </Card>
    </div>
  );
}

export default Cards;
