import styles from "../components/sidebar.module.css"
import Logo from "./Logo"
import AppNav from "../components/AppNav"

function Sidebar() {
    return (
        <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <p>List of cities</p>

        <footer className={styles.footer}> 
            <p>&copy; Copyright {new Date().getFullYear()}</p>
        </footer>
            
        </div>
    )
}

export default Sidebar
