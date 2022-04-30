import React from 'react'
import Produto from './Produto'
import './App.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ativar, setAtivar] = React.useState(false)

const App = () => {
  return (
    <div>
        <button onClick={() => setAtivar(!ativar)} >Ativar</button>
        {ativar && <Produto />}
    </div>
  )
}

export default App