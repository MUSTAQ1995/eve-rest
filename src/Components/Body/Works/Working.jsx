import React from 'react';
import Underline from "../../../assets/svgs/underline.svg";
import styles from "./Working.module.scss";

function Working() {
  return (
    <figure className={styles.working} >
        <span>How it works?</span><br/>
        <img src={Underline} alt="underline" />
    </figure>
  )
};
export default Working;