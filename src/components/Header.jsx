import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Adivina el Pokemon!</h1>
      <p>Pokemones de 1º generación</p>
    </div>
  )
}

export default Header