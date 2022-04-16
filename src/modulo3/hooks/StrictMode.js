import React from 'react'

const App = () => {

    const [count, setCount] = React.useState(0)
    const [items, setItems] = React.useState(['Item 1'])

    function handleClick() {
        setCount((count) => count + 1)
    }
    setItems([...items, `Item ${count + 1}`])
    
  return (
    <div>
        <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App