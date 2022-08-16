import React from 'react';
import Twitter from "../../assets/svgs/twitter.svg";
import Instagram from "../../assets/svgs/instagram.svg";
import Fbook from "../../assets/svgs/facebook.svg";
import Logo from "../../assets/svgs/logo.svg";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <section className={styles.container} >
      <figure className={styles.logo} >
        <img src={Logo} alt="UP Box"  />
      </figure>
      <figure className={styles.socialmedia} >
        <img src={Instagram} alt="Instagram" className={styles.insta} />
        <img src={Fbook} alt="Facebook" className={styles.fbook} />
        <img src={Twitter} alt="Twitter" className={styles.twitter} />
      </figure>
    </section>
  )
};

export default Footer;