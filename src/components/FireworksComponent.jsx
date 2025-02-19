import React, { useRef, useEffect } from 'react'
import styles from "./Fireworks.module.css"
import { Fireworks } from '@fireworks-js/react'
import { useSelector } from 'react-redux';

const FireworksComponent = () => {

  const ref = useRef(null);
  const acierto = useSelector(state => state.pokemonsReducer.acierto)

  useEffect(()=> {
    if (acierto) {
      ref.current.start()
    } else {
      ref.current.stop()
    }
  }, [acierto])

  return (
    <div className={styles.container} >
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#00000000'
        }}
      />
    </div>
  )
}

export default FireworksComponent