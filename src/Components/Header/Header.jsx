import React, { useState } from 'react';
import TopBar from "../../assets/pngs/topbar-desktop.png";
import Logo from "../../assets/svgs/logo.svg";
import Close from "../../assets/svgs/hamburger-close.svg";
import Menu from "../../assets/svgs/hamburger.svg";
import styles from "./Header.module.scss";

function Header() {
  const [menu, setMenu] = useState(true);

  const handleShowMenu = () => {
    setMenu(false);
  };

  const handleHideMenu = () => {
    setMenu(true);
  };

  const listItems = [
    { "name": "THIS MONTH" },
    { "name": "SKIN" },
    { "name": "HAIR" },
    { "name": "BATH" },
    { "name": "SALE" },
  ]

  return (
    <>
    {menu ? (
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
        <nav className={styles.mobilenavbar} >
          <figure className={styles.logomobile}  >
            <img src={Logo} alt={Logo}  />
          </figure>
          <figure className={styles.mobilemenu} onClick={() => handleShowMenu()} >
            <img src={Menu} alt="Menu" />
          </figure>
        </nav>
      </header>
    ) : (
      <nav className={styles.showmenu} >
          <figure className={styles.close} onClick={() => handleHideMenu()} >
            <img src={Close} alt="Close"  />
          </figure>
          <ul className={styles.mobilelist} >
          {listItems.map((list, index) => {
                return(
                  <li key={index}><h5>{list.name}</h5></li>
                )
              })}
          </ul>
      </nav>
    )}
    
    </>
  )
}

export default Header