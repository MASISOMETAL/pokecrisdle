import React from 'react'
import styles from "./Category.module.css"

const Category = ({ text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Category