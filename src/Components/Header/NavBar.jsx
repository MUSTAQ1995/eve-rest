import React from 'react';
import MobileNavBar from './MobileNavBar';
import TopBar from "../../assets/pngs/topbar-desktop.png";
import Logo from "../../assets/svgs/logo.svg";
import styles from "./NavBar.module.scss";


function NavBar({ 
    listItems,
    handleShowMenu
}) {
  return (
    <header className={styles.container} >
    <figure className={styles.topbar} >
      <img src={TopBar} alt={TopBar} />
    </figure>
    <nav className={styles.navbar} >
      <figure className={styles.logo} >
        <img src={Logo} alt={Logo} />
      </figure>
      <section className={styles.navbarmenu} >
        <ul className={styles.menudetails}>
          {listItems.map((list, index) => {
            return(
              <li key={index}><h5>{list.name}</h5></li>
            )
          })}
        </ul>
        <div className={styles.login} >
          <h5>LOG IN &gt; </h5>
        </div>
      </section>
    </nav>
    <MobileNavBar handleShowMenu={handleShowMenu} />
  </header>
  )
}

export default NavBar