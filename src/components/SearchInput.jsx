import React, { useState, useEffect } from 'react'
import styles from "./SearchInput.module.css"
import PokemonFilter from './PokemonFilter'
import { useDispatch, useSelector } from 'react-redux'
import { selectPokemon } from '../store/slices/PokemonSlice'

const SearchInput = () => {

  const [input, setInput] = useState("")
  const [pokeFilter, setPokeFilter] = useState([])
  const Pokemons = useSelector(state => state.pokemonsReducer.pokemons)

  const dispatch = useDispatch()

  useEffect(() => {
    if (input) {
      const filter = Pokemons.filter(item => item.name.toLowerCase().startsWith(input))
      setPokeFilter(filter);
    } else {
      setPokeFilter([]);
    }
  }, [input])

  const selectedPokemon = (item) => {
    setInput("")
    dispatch(selectPokemon(item))
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Escribe el nombre del Pokemon"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className={styles.containerCard}>
        {pokeFilter && pokeFilter.map((item, index) => <PokemonFilter item={item} key={item.id} selectedPokemon={selectedPokemon} index={index} />)}
      </div>
    </div>
    
  )
}

export default SearchInput