import Link from "next/Link";
import ActiveLink from "../presentation/activeLink";
import styles from "../../styles/topNavigation.module.css"

const Navbar = () => {
    return (   
        <div>
            <section className={styles.sec}>
            <header className={styles.header}>
                <ul>
                <li><ActiveLink href="/home">Home</ActiveLink></li>
                <li><ActiveLink href="#">Home</ActiveLink></li>
                <li><ActiveLink href="#">Home</ActiveLink></li>
               
                </ul>
            </header>
         </section>
        </div>
     );
}
 
export default Navbar;


