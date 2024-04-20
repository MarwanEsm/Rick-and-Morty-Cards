import React from "react";
import styles from "./MoreInfo.module.scss"


const MoreInfo = ({ character, index }) => {
    return (
        <div>
            <p className={styles.status}>
                {"Status is"} {character.status}
            </p>
            <p className={styles.status}>
                {"Species is"} {character.species}
            </p>

        </div>
    );
}

export default MoreInfo;
