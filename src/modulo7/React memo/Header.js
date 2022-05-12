import React from 'react'

const Header = () => {
    console.log('renderizou');
  return (
    <div>
        <h1>Header</h1>
    </div>
  )
}

export default React.memo(Header) // evita que o componente seja renderizado várias vezes sem necessidade