import React from 'react'
import './App.css'
// import Produto from './Components/Produto'
import Card from 'react-bootstrap/Card'

const App = () => {
  return (
    //com bootstrap

    // <div className='card bg-dark text-white m-5'style={{maxWidth: '18rem'}}>
    //   <div className='card-header'>Notebook</div>
    //   <div className='card-body'>
    //     <h5 className='card-title'>Preço: R$ 2.000,00</h5>
    //     <p className='card-text'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     </p>
    //     </div>
    // </div>

    //com react bootstrap - parecido com o styled components

    <Card bg='dark' text='white' className='m-5' style={{maxWidth: '18rem'}}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>Preço: R$ 2.000,00</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default App