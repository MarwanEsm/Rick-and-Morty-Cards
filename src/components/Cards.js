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
  margin: 6,
};

const colStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "space-betweent",
};
const textStyle = {
  fontSize: 14,
  fontFamily: "Segoe UI",
  color: "white",
};

function Cards({ character, index }) {
  return (
    <Col xs={14} sm={10} md={6} lg={3} style={colStyle}>
      <Card
        className="p-3"
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
