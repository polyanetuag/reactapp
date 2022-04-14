import React from 'react'
import Title from './Title'

function Products() {

    const products = [
        { nome: 'Notebook', preco: 'R$: 2.000,00' },
        { nome: 'Smartphone', preco: 'R$: 1.000,00' },
    ]


  return (
    <section>
        <Title text='Produtos'/>
        {products.map(product => (
            <li>{product.nome}</li>
        ))}
    </section>
  )
}

export default Products