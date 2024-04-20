import SearchBar from "../../searchBar/SearchBar"
import styles from "./Header.module.scss"
const Header = () => {

    return <div className={styles.container}>
        <label>Let's find you favorite character<b>.</b></label>
        <SearchBar />
    </div>
}

export default Header