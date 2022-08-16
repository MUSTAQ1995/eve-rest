import React from 'react';
import styles from "./Body.module.scss";
import SignUp from './SignUp';
import Works from './Works/Works';
// import Works from './Works';


function Body() {
  return (
    <div className={styles.container} >
      <section className={styles.signup} >
        <SignUp />
      </section>
      <section className={styles.works} >
        <Works/>
      </section>
    </div>
  );
};

export default Body;