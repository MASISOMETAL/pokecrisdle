import React from 'react'
import styles from "./Modal.module.css"
import { useSelector } from 'react-redux'

const Modal = () => {

  const intentos = useSelector(state => state.pokemonsReducer.intentos)
  const pokemonDay = useSelector(state => state.pokemonsReducer.pokemonDay)

  return (
    <div className={styles.container}>
      <div className={styles.containerModal}>
        <p className={styles.text}>El Pokemon del dia era <span className={styles.span}>{pokemonDay.name}</span></p>
        <p className={styles.text}>Lo has adivinado despues de <span className={styles.span}>{intentos}</span> intentos</p>
      </div>
    </div>
  )
}

export default Modal