import React from 'react'
import styles from "./PokemonSelected.module.css"
import Category from './Category'
import { useSelector } from 'react-redux'
import CardPokemonSelected from './CardPokemonSelected'

const PokemonSelected = () => {

  const PokemonsSelected = useSelector(state => state.pokemonsReducer.pokemonsSelected)

  return (
    <div className={styles.container}>
      <div className={styles.containerCategorys}>
        <Category text="Pokemon" />
        <Category text="Tipo 1" />
        <Category text="Tipo 2" />
        <Category text="Habitat" />
        <Category text="Etapa de evolucion" />
        <Category text="Altura" />
        <Category text="Peso" />
      </div>

      <div className={styles.containerListPokemon}>
        {PokemonsSelected && PokemonsSelected.map(item=> <CardPokemonSelected key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default PokemonSelected