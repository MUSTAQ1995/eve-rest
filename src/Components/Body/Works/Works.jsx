import React from 'react';
import Underline from "../../../assets/svgs/underline.svg";
import ThreeWork from "../../../assets/svgs/workthree.svg";
import Three from "../../../assets/svgs/three.svg";
import WorkOne from './WorkOne';
import WorkTwo from './WorkTwo';
import styles from "./Works.module.scss";


function Works() {
  return (
    <div className={styles.container} >
        <figure className={styles.working} >
            <span>How it works?</span><br/>
            <img src={Underline} />
        </figure>
        <WorkOne/>
        <WorkTwo/>
        <div className={styles.work_three}>
            <div className={styles.workthree_pictures} >
                <img src={ThreeWork} alt="Work Three" className={styles.pic_three}  />
                <img src={Three} alt="One" className={styles.three_three} />
            </div>
            <div className={styles.desc_three} >
                <span>Try it on at home</span>
                <p>Your box will arrive within 3-5days(usually sooner) and you get the joy to unbox your Upbox.
                    Try it all on and send back whatever you're not in love with.
                </p>
            </div>
        </div>
        <div className={styles.try_it} >
            <p>TRY IT FOR YOURSELF <span style={{ fontWeight: "bold"}}>&gt;</span></p>
        </div>
    </div>
  )
}

export default Works