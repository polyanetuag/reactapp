import React from 'react';
import Form from './Form/Form';
import Header from './Header';

const App = () => { 
  return (

    <div>
      <Header />
      <Form />
      <a className='ativo' href='https://google.com' title='Ir para site Google'>Google
      </a>
    </div>
  )
};

export default App;
