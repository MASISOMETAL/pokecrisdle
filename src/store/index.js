import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from "./slices/PokemonSlice"

export const store = configureStore({
  reducer: {
    pokemonsReducer: pokemonsReducer
  },
})