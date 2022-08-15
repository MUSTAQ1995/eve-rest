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
    setMenu(true)
  }
  return (
    <>
    {menu ? (
      <header className={styles.container} >
      <figure className={styles.top_bar} >
        <img src={TopBar} alt={TopBar} />
      </figure>
      <div className={styles.nav_bar} >
        <div className={styles.logo} >
          <img src={Logo} alt={Logo} />
        </div>
        <div className={styles.navbar_menu} >
          <div className={styles.menu_details}>
            <h5>THIS MONTH</h5>
            <h5>SKIN</h5>
            <h5>HAIR</h5>
            <h5>BATH</h5>
            <h5>SALE</h5>
          </div>
          <div className={styles.log_in} >
            <h5>LOG IN &gt; </h5>
          </div>
        </div>
      </div>
      <div className={styles.mobile_navbar} >
        <div className={styles.logo_mobile}  >
          <img src={Logo} alt={Logo}  />
        </div>
        <div className={styles.mobile_menu} onClick={() => handleShowMenu()} >
          <img src={Menu} alt="Menu" />
        </div>
      </div>
    </header>
    ) : (
      <div className={styles.show_menu} >
          <div className={styles.close} onClick={() => handleHideMenu()} >
            <img src={Close} alt="Close"  />
          </div>
          <div className={styles.mobile_list} >
            <h5>THIS MONTH</h5>
            <h5>SKIN</h5>
            <h5>HAIR</h5>
            <h5>BATH</h5>
            <h5>SALE</h5>
            <h5>LOG IN &gt; </h5>
          </div>
      </div>
    )}
    
    </>
  )
}

export default Header