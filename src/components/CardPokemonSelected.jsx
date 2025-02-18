import React from 'react'
import styles from "./CardPokemonSelected.module.css"
import { useSelector } from 'react-redux'
import flDown from "../assets/img/fldown.png"
import flup from "../assets/img/flup.png"

const CardPokemonSelected = ({ item }) => {

  const pokemonDay = useSelector(state=> state.pokemonsReducer.pokemonDay)

  return (
    <div className={styles.container}>
      <div className={styles.boxWhite}>
        <img src={item.img} alt={item.name} className={styles.img} />
        <span className={styles.textName}>{item.name}</span>
      </div>
      <div className={pokemonDay.tipo1 == item.tipo1 ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.tipo1}</span>
      </div>
      <div className={pokemonDay.tipo2 == item.tipo2 ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.tipo2}</span>
      </div>
      <div className={pokemonDay.habitat == item.habitat ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.habitat}</span>
      </div>
      <div className={pokemonDay.evolucion == item.evolucion ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.evolucion}</span>
        {Number(pokemonDay.evolucion) < Number(item.evolucion) && <img src={flDown} alt="" className={styles.flImg} />}
        {Number(pokemonDay.evolucion) > Number(item.evolucion) && <img src={flup} alt="" className={styles.flImg} />}
      </div>
      <div className={pokemonDay.altura == item.altura ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.altura} m</span>
        {Number(pokemonDay.altura) < Number(item.altura) && <img src={flDown} alt="" className={styles.flImg} />}
        {Number(pokemonDay.altura) > Number(item.altura) && <img src={flup} alt="" className={styles.flImg} />}
      </div>
      <div className={pokemonDay.peso == item.peso ? styles.boxGreen : styles.boxRed}>
        <span className={styles.text}>{item.peso} kg</span>
        {Number(pokemonDay.peso) < Number(item.peso) && <img src={flDown} alt="" className={styles.flImg} />}
        {Number(pokemonDay.peso) > Number(item.peso) && <img src={flup} alt="" className={styles.flImg} />}
      </div>
    </div>
  )
}

export default CardPokemonSelected