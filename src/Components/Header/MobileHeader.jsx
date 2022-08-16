import React from 'react'
import Close from "../../assets/svgs/hamburger-close.svg";
import styles from "./MobileHeader.module.scss";

function MobileHeader({listItems,handleHideMenu}) {
  return (
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
  )
}

export default MobileHeader