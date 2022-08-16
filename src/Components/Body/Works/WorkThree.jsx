import React from 'react';
import ThreeWork from "../../../assets/svgs/workthree.svg";
import Three from "../../../assets/svgs/three.svg";
import styles from "./WorkThree.module.scss";

function WorkThree() {
  return (
    <section className={styles.work_three}>
        <figure className={styles.workthree_pictures} >
            <img src={ThreeWork} alt="Work Three" className={styles.pic_three}  />
            <img src={Three} alt="One" className={styles.three_three} />
        </figure>
        <article className={styles.desc_three} >
            <span>Try it on at home</span>
            <p>Your box will arrive within 3-5days(usually sooner) and you get the joy to unbox your Upbox.
                Try it all on and send back whatever you're not in love with.
            </p>
        </article>
    </section>
   )
}

export default WorkThree;