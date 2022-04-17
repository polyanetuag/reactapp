import React from 'react'

const App = () => {
    const [count, setCount] = React.useState(0)
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then(response => response.json())
            .then((json) => setData(json))
    }, [])

    // É renderizado uma única vez
    // React.useEffect(() => {
    //     console.log('useEffect')
    // }, [])

  return (
      <div>
          {data && (
              <div>
                  <h1>{data.nome}</h1>
                  <p>R$ {data.preco * count}</p>
              </div>
          )}
        <button onClick={() => setCount(count + 1)}>{count}</button>
     </div>
  )
}

export default App