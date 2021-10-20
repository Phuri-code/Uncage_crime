import styles from "../../styles/topNavigation.module.css";
import ActiveLink from "../presentation/activeLink";
import LING from "../container/image";
import { AppBar } from "@material-ui/core";

export default function TopNavigation(){
    return ( 
     <div>
         <section className={styles.sec}>
              <AppBar>
        <header className={styles.header}>
        <a href="#"><LING/></a>
        <ul>
          <li>  <ActiveLink href="/home">HOME</ActiveLink></li>
          <li>  <ActiveLink href="/About">ABOUT</ActiveLink></li>
          <li>  <ActiveLink href="/post/first-post">STORE</ActiveLink></li>
          <li>  <ActiveLink href="/post/first-post">signUp</ActiveLink></li>
         </ul>
    </header>   </AppBar>
    </section>
  
     </div>
     );
}
    