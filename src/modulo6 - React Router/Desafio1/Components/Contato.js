import React from 'react'
import styles from './Contato.module.css'
import Head from './Head'
import imgContato from './imgContato.jpeg'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Ranek | Contato' description='Entre em contato' />
      <img src={imgContato} alt='Telefone' />
      <div>
      <h1>Entre em contato</h1>
      <ul className= {styles.dados}> 
        <li>johndoe@gmail.com</li>
        <li>99999-9999</li>
        <li>Rua Ali, 999</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato