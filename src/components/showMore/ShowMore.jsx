import React, { useState } from "react";
import MoreInfo from "../morInfo/MoreInfo";
import styles from './ShowMore.module.scss'

const ShowMore = (props) => {
    const [show, setShow] = useState(false);

    const showMoreHandler = (event) => {
        event.preventDefault();
        setShow(!show);
    }

    return (
        <div>
            <div>
                {show && <MoreInfo character={props.character} />}
            </div>
            <div>
                <a href="#" onClick={showMoreHandler} className={styles.showMore}>
                    {show ? "Show Less" : "Show More"}
                </a>
            </div>
        </div>
    );
}



export default ShowMore;
