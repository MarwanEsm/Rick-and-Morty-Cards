import SearchBar from "../../elements/searchBar/SearchBar"
import styles from "./Header.module.scss"
import Button from "../../elements/button/Button"
const Header = () => {

    return <div className={styles.container}>
        <label>Let's find you favorite character<b>.</b></label>
        <SearchBar />
        <Button />
    </div>
}

export default Header