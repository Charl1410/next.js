import React from 'react'
import styles from '../styles/button.module.css'

const Button = (props) => {
  return (
<button className={styles.button}>{props.buttonName}</button>
  )
}

export default Button
