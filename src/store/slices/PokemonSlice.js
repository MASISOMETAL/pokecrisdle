import { createSlice } from '@reduxjs/toolkit'
import { Pokemons } from '../../data/pokemons'

const initialState = {
  pokemons: Pokemons,
  pokemonsSelected: [],
  pokemonDay: Pokemons[Math.floor(Math.random() * 151)],
  intentos: 0,
  acierto: false
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    selectPokemon: (state, { payload }) => {

      state.pokemonsSelected.unshift(payload)
      const filterP = state.pokemons.filter(item => item.id != payload.id)
      state.pokemons = filterP
      state.intentos++
      if (state.pokemonDay.id == payload.id) {
        state.acierto = true
      }
    }
  }
})

export const { selectPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer