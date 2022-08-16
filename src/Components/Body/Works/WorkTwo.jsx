import React from 'react';
import Worktwo from "../../../assets/pngs/work2.png";
import Two from "../../../assets/svgs/two.svg";
import styles from "./WorkTwo.module.scss";

function WorkTwo() {
  return (
    <section className={styles.work_two} >
        <article className={styles.workTwo_right} >
            <figure className={styles.workTwo_pictures} >
                <img src={Worktwo} alt="Work Two" className={styles.pic_two} />
                <img src={Two} alt="Two" className={styles.two_two} />
            </figure>
            <section className={styles.workTwo_desc} >
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