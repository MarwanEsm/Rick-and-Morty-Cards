import React from "react";
import Card from "react-bootstrap/Card";
import ShowMore from "./ShowMore";
import "react-flex/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

const cardStyle = {
  display: "flex",
  width: "100%",
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
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card
        // className="p-1"
        border="primary"
        style={cardStyle}
      >
        <Card.Img src={character.image} alt="" roundedCircle />
        <Card.Text style={textStyle}>{character.name}</Card.Text>
        <ShowMore character={character} />
      </Card>
    </Col>
  );
}

export default Cards;
