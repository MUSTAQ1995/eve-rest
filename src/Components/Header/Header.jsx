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
        <figure className={styles.top_bar} >
          <img src={TopBar} alt={TopBar} />
        </figure>
        <nav className={styles.nav_bar} >
          <figure className={styles.logo} >
            <img src={Logo} alt={Logo} />
          </figure>
          <section className={styles.navbar_menu} >
            <ul className={styles.menu_details}>
              {listItems.map((list, index) => {
                return(
                  <li key={index}><h5>{list.name}</h5></li>
                )
              })}
            </ul>
            <div className={styles.log_in} >
              <h5>LOG IN &gt; </h5>
            </div>
          </section>
        </nav>
        <nav className={styles.mobile_navbar} >
          <figure className={styles.logo_mobile}  >
            <img src={Logo} alt={Logo}  />
          </figure>
          <figure className={styles.mobile_menu} onClick={() => handleShowMenu()} >
            <img src={Menu} alt="Menu" />
          </figure>
        </nav>
      </header>
    ) : (
      <nav className={styles.show_menu} >
          <figure className={styles.close} onClick={() => handleHideMenu()} >
            <img src={Close} alt="Close"  />
          </figure>
          <ul className={styles.mobile_list} >
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