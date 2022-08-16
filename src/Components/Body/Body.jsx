import React from 'react';
import styles from "./Body.module.scss";
import SignUp from './SignUp';
import Works from './Works';

function Body() {
  return (
    <div className={styles.container} >
      <div className={styles.sign_up} >
        <SignUp />
      </div>
      {/* <div className={styles.works} >
        <Works/>
      </div> */}
    </div>
  );
};

export default Body;