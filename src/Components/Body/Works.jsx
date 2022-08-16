import React from 'react';
import Underline from "../../assets/svgs/underline.svg";
import Onework from "../../assets/svgs/workone.svg";
import One from "../../assets/svgs/one.svg";
import WorkTwo from "../../assets/pngs/work2.png";
import Two from "../../assets/svgs/two.svg";
import ThreeWork from "../../assets/svgs/workthree.svg";
import Three from "../../assets/svgs/three.svg";
import styles from "./Works.module.scss";

function Works() {
  return (
    <div className={styles.container} >
        <div className={styles.working} >
            <span>How it works?</span><br/>
            <img src={Underline} />
        </div>
        <div className={styles.work_one} >
            <div className={styles.workone_pictures} >
                <img src={Onework} alt="Work One" className={styles.pic_one}  />
                <img src={One} alt="One" className={styles.one_one} />
            </div>
            <div className={styles.desc_one} >
                <span>Setup your profiel {"&"}<br/> preferences</span>
                <p>Once you create an account, you can start to tell us 
                    your likes and dislikes so we can tailor
                    the experience just for you.
                </p>
            </div>
        </div>
        <div className={styles.work_two} >
            <div className={styles.workTwo_right} >
                <div className={styles.workTwo_pictures} >
                    <img src={WorkTwo} alt="Work Two" className={styles.pic_two} />
                    <img src={Two} alt="Two" className={styles.two_two} />
                </div>
                <div className={styles.workTwo_desc} >
                    <span> Review your <br/>custom box </span>
                    <p>Once we get to know you, we will show you the
                        box we've crafted.This is your chance to approve 
                        it before we ship it to your house.
                    </p>
                </div>
            </div>
        </div>
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