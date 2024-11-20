import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css";
import '../index.css';
import Logo from "./Logo";


function PageNav() {
    return (
        <nav className={styles.nav} >
            <Logo/>

            <ul className={styles.ul}>


                {/* <li>
                    <NavLink to="/">Home</NavLink>
                </li> */}

                <li>
                    <NavLink to="/Product">Product</NavLink>
                </li>

                <li>
                    <NavLink to="/Pricing">Pricing</NavLink>
                </li>

                <li>
                    <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default PageNav
