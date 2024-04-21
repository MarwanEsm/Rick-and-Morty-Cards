import SearchBar from "../../elements/searchBar/SearchBar"
import styles from "./Header.module.scss"
import Button from "../../elements/button/Button"


const Header = ({ ...options }) =>
    <div className={styles.container}>
        <label>Let's find your favorite character<b>.</b></label>
        <SearchBar {...options} />
        <Button {...options} />
    </div>


export default Header