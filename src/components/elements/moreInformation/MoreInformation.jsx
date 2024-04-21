import React from "react";
import styles from "./MoreInformation.module.scss"

const MoreInformation = ({ character }) =>
    <div className={styles.container}>
        {character?.name && <div><b>Name :</b><span> {character?.name}</span></div>}
        {character?.location && <div><b>Location :</b><span> {character?.location?.name}</span></div>}
        {character?.status && <div><b>Status :</b><span> {character?.status}</span></div>}
        {character?.species && <div><b>Species :</b><span> {character?.species}</span></div>}
        {character?.type && <div><b>Type :</b><span> {character?.type}</span></div>}
    </div>


export default MoreInformation