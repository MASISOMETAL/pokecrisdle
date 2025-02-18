import React from 'react'
import styles from "./PokemonFilter.module.css"

const PokemonFilter = ({ item, selectedPokemon, index }) => {
  return (
    <div className={styles.container} onClick={()=> selectedPokemon(item)}>
      <div className={styles.containerImg}>
        <img src={item.img} alt={item.name} className={styles.img} />
      </div>
      <p className={styles.text}>{item.name}</p>
    </div>
  )
}

export default PokemonFilter