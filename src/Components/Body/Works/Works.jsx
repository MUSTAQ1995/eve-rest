import React from 'react';
import Underline from "../../../assets/svgs/underline.svg";
import WorkOne from './WorkOne';
import WorkTwo from './WorkTwo';
import styles from "./Works.module.scss";
import WorkThree from './WorkThree';


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
        <div className={styles.try_it} >
            <p>TRY IT FOR YOURSELF <span style={{ fontWeight: "bold"}}>&gt;</span></p>
        </div>
    </div>
  )
}

export default Works