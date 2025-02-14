import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <p className={styles.text}>pagina creada por cris</p>
    </div>
  )
}

export default Footer