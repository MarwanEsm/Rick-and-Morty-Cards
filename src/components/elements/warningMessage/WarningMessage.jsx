import styles from './WarningMessage.module.scss'

const WarningMessage = ({ text }) => <h4 className={styles.WarningMessage}>{text}</h4>

export default WarningMessage