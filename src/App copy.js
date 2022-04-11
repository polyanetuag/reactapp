import React from 'react';

const App = () => { 
  // const filmes = [  'Sunrise, ', 'Sunset, ', 'Midnight' ];
  // return (
  //  <ul>
  //    {filmes.map((filme) => <li key={filme}>{filme}</li>)}
  //  </ul>
  // ) ;

  const livros = [ 
    {titulo: 'Harry Potter e a Pedra Filosofal', preco: 24.99}, 
    {titulo: 'O Senhor dos Anéis', preco: 19.99},
    {titulo: 'O Hobbit', preco: 29.99}
  ];
  return (
    <ul>
      {livros
        .filter(({preco}) => preco <= 25)
        .map(({titulo, preco}) =>
         <li key={titulo}>
           {titulo}, {preco}
          </li>)}
    </ul>
  )
}

export default App;
