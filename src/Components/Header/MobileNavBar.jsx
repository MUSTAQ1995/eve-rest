import React from 'react'
import Logo from "../../assets/svgs/logo.svg";
import Menu from "../../assets/svgs/hamburger.svg";
import styles from "./MobileNavbar.module.scss";


function MobileNavBar({handleShowMenu}) {
  return (
    <nav className={styles.mobilenavbar} >
        <figure className={styles.logomobile}  >
            <img src={Logo} alt={Logo}  />
        </figure>
        <figure className={styles.mobilemenu} onClick={() => handleShowMenu()} >
            <img src={Menu} alt="Menu" />
        </figure>
    </nav>
  )
}

export default MobileNavBar