import React, { Fragment } from 'react';
import Header from "../Components/Header/Header";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container} >
        <div className={styles.Header} >
            <Header/>
        </div>
    {/* <div className={styles.main_body} >
        <Body/>
    </div>
    <div className={styles.footer} >
      <Footer/>
    </div> */}
</div>
  )
}

export default Home