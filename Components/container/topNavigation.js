// import ActiveLink from "../presentation/activeLink";
import styles from "../../styles/topNavigation.module.css"
// import styles from '../styles/Home.module.css'
import Image from "../container/image";
import ActiveLink from "../presentation/activeLink";

export default function TopNavigation(){
    return ( 
     <div>
         <section className={styles.sec}>
        <header className={styles.header}>
        <a href="#"><Image/></a>
        <ul>
            <li><ActiveLink href="/home">HOME</ActiveLink></li>
            <li><ActiveLink href="/About">ABOUT</ActiveLink></li>
            <li><ActiveLink href="/contact">STORE</ActiveLink></li>
            <li><ActiveLink href="#">SIGN</ActiveLink></li>
        </ul>
    </header>
    </section>
     </div>
     );
}
    

  
 
