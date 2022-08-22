import React from 'react';
import WorkOne from './WorkOne';
import WorkTwo from './WorkTwo';
import WorkThree from './WorkThree';
import Try from './Try';
import Working from './Working';
import styles from "./Works.module.scss";


function Works() {
  return (
    <div className={styles.container} >
      <Working/>
      <WorkOne/>
      <WorkTwo/>
      <WorkThree/>
      <Try/>
    </div>
  )
}

export default Works;