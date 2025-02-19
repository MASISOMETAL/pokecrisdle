import React from 'react'
import styles from "./App.module.css"
import fondoIMG from "./assets/img/fondo.webp"
import Logo from './components/Logo'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import PokemonSelected from './components/PokemonSelected'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import Fireworks from './components/FireworksComponent'

const App = () => {

  const acierto = useSelector(state => state.pokemonsReducer.acierto)

  return (
    <div className={styles.container}>
      <img className={styles.fondo} src={fondoIMG} alt="" />
      {acierto &&
        <>
          <Fireworks />
          <Modal />
        </>}
      <div className={styles.content}>
        <Logo />
        <Header />
        <SearchInput />
        <PokemonSelected />
        <Footer />
      </div>
    </div>
  )
}

export default App