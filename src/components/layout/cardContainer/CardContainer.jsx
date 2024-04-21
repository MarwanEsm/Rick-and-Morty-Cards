import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import classNames from "classnames"
import MoreInformation from "../../elements/moreInformation/MoreInformation";
import styles from "./CardContainer.module.scss"
import "react-flex/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardContainer = ({ character, onCardSelect, index, isSelected }) => {

    return <Col lg={3} md={6} sm={10} xs={14} className={styles.container}>
        {
            isSelected ?
                <Card
                    border="primary"
                    className={classNames("p-3 card", styles.card)}
                    onClick={() => onCardSelect(index)}
                // onMouseLeave={() => onCardSelect(index)}
                >
                    <MoreInformation character={character} />
                </Card>
                :
                <Card
                    border="primary"
                    className={classNames("p-3 card", styles.card)}
                    onClick={() => onCardSelect(index)}
                >
                    <Card.Img src={character.image} alt={`${character.name}`} />
                    <Card.Text className={styles.character_name}>{character.name}</Card.Text>
                </Card>

        }
    </Col>
}



export default CardContainer;
