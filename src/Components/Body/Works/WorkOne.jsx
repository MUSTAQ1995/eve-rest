import React from 'react';
import Onework from "../../../assets/svgs/workone.svg";
import One from "../../../assets/svgs/one.svg";
import styles from "./WorkOne.module.scss";

function WorkOne() {
  return (
    <section>
         <article className={styles.workone} >
            <figure className={styles.workonepictures} >
                <img src={Onework} alt="Work One" className={styles.picone}  />
                <img src={One} alt="One" className={styles.oneone} />
            </figure>
            <div className={styles.descone} >
                <span>Setup your profiel {"&"}<br/> preferences</span>
                <p>Once you create an account, you can start to tell us 
                    your likes and dislikes so we can tailor
                    the experience just for you.
                </p>
            </div>
        </article>
    </section>
  )
};

export default WorkOne;