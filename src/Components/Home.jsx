import React from 'react';
import Header from "./Header/Header";
import Body from './Body/Body';
import Footer from './Footer/Footer';
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container} >
      <header className={styles.Header} >
        <Header/>
      </header>
      <section className={styles.main_body} >
        <Body/>
      </section>
      <footer className={styles.footer} >
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;