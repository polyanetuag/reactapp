import React from 'react'
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <div>
        <h1 className={styles.titulo}>Notebook</h1>
        <p>R$ 4000</p>
        <button>Comprar</button>
    </div>
  )
}

export default Produto