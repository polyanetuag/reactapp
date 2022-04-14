import React from 'react'

const Title = (props) => {
  return (
    <div>{props.text}</div>
  )
}

const App = () => {
    return (
        <div>
            <Title text="Título 1" />
        </div>
    )
}

export default App