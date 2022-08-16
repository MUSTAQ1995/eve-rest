import React from 'react';
import Underline from "../../../assets/svgs/underline.svg";
import WorkOne from './WorkOne';
import WorkTwo from './WorkTwo';
import styles from "./Works.module.scss";
import WorkThree from './WorkThree';
import Try from './Try';


function Works() {
  return (
    <div className={styles.container} >
        <figure className={styles.working} >
            <span>How it works?</span><br/>
            <img src={Underline} />
        </figure>
        <WorkOne/>
        <WorkTwo/>
        <WorkThree/>
        <Try/>
    </div>
  )
}

export default Works