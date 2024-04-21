import React from "react";
import Card from "react-bootstrap/Card";
import ShowMore from "../../showMore/ShowMore";
import { Col } from "react-bootstrap";
import classNames from "classnames"
import styles from "./CardContainer.module.scss"
import "react-flex/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardContainer = ({ character }) => {

    return (
        <Col lg={3} md={6} sm={10} xs={14} className={styles.container}>
            <Card
                border="primary"
                className={classNames("p-3 card", styles.card)}
            >
                <Card.Img src={character.image} alt={`${character.name}`} />
                <Card.Text className={styles.character_name}>{character.name}</Card.Text>
                <ShowMore character={character} />
            </Card>
        </Col>
    );
}

export default CardContainer;
