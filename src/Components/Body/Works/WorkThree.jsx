import React from 'react';
import ThreeWork from "../../../assets/svgs/workthree.svg";
import Three from "../../../assets/svgs/three.svg";
import styles from "./WorkThree.module.scss";

function WorkThree() {
  return (
    <section className={styles.workthree}>
        <figure className={styles.workthreepictures} >
            <img src={ThreeWork} alt="Work Three" className={styles.picthree}  />
            <img src={Three} alt="One" className={styles.threethree} />
        </figure>
        <article className={styles.descthree} >
            <span>Try it on at home</span>
            <p>Your box will arrive within 3-5days(usually sooner) and you get the joy to unbox your Upbox.
                Try it all on and send back whatever you're not in love with.
            </p>
        </article>
    </section>
   )
}

export default WorkThree;