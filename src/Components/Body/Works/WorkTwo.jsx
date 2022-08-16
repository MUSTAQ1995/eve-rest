import React from 'react';
import Worktwo from "../../../assets/pngs/work2.png";
import Two from "../../../assets/svgs/two.svg";
import styles from "./WorkTwo.module.scss";

function WorkTwo() {
  return (
    <section className={styles.worktwo} >
        <article className={styles.workTworight} >
            <figure className={styles.workTwopictures} >
                <img src={Worktwo} alt="Work Two" className={styles.pictwo} />
                <img src={Two} alt="Two" className={styles.twotwo} />
            </figure>
            <section className={styles.workTwodesc} >
                <span> Review your <br/>custom box </span>
                <p>Once we get to know you, we will show you the
                    box we've crafted.This is your chance to approve 
                    it before we ship it to your house.
                </p>
            </section>
        </article>
    </section>
    )
};

export default WorkTwo;