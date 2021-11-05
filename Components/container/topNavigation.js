import styles from "../../styles/topNavigation.module.css";
import ActiveLink from "../presentation/activeLink";
import LING from "../container/image";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { AppBar,Badge } from "@material-ui/core";

export default function TopNavigation() {
     return (
          <div>
               <section className={styles.sec}>
                    <AppBar>
                         <header className={styles.header}>
                              <a href="#"><LING /></a>
                              <input/>
                              <ul>
                                   <li>  <ActiveLink href="/">HOME</ActiveLink></li>
                                   <li>  <ActiveLink href="/about">ABOUT</ActiveLink></li>
                                   <li>  <ActiveLink href="/store"> STORE <Badge badgeContent={4} color="secondary">
                                        <AddShoppingCartIcon />
                                   </Badge></ActiveLink></li>
                                   <li>  <ActiveLink href="/signup">SIGN UP</ActiveLink></li>
                              </ul>
                         </header>   </AppBar>
               </section>

          </div>
     );
}
