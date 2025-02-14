import React from 'react'
import logoIMG from "../assets/img/logo.png"
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imgLogo} src={logoIMG} alt="logo" />
    </div>
  )
}

export default Logo