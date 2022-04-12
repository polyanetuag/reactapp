/* eslint-disable no-undef */
import React from 'react';

  const produtos = [ 
    {
      id: 1, 
      nome: 'Smartphone', 
      preco: 'R$2000', 
      cores: ['Azul', 'Verde', 'Vermelho']
    },
    {
      id: 2, 
      nome: 'Tablet', 
      preco: 'R$3000', 
      cores: ['Branco', 'Pink', 'Amarelo']
    },
    {
      id: 3, 
      nome: 'Notebook', 
      preco: 'R$7000', 
      cores: ['Cinza', 'Preto']
    },
  ];

  const App = () => {

    const dados = produtos.filter(({preco}) => Number(preco.replace('R$', '')) > 2000);

    return <section>
      {dados.map(({id, nome, preco, cores}) => (
      <div key={id}>
        <h1>{nome}</h1>
        <p>{preco}</p>
        <ul>
          {cores.map((cor) => <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>)}
        </ul>
      </div>
      ))}
    </section>
  }

export default App;
