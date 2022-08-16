import React from 'react'
import styles from "./Try.module.scss";

function Try() {
  return (
    <section className={styles.try_it} >
        <p>TRY IT FOR YOURSELF <span style={{ fontWeight: "bold"}}>&gt;</span></p>
    </section>
  )
}

export default Try;