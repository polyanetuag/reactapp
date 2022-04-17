import React from 'react'
import Product from './Product'

const App = () => {
    const [product, setProduct] = React.useState(null)

    //renderizar ao carregar a página (ocorre apenas uma vez) - salvar referencia
    React.useEffect(() => {
        const productLocal = window.localStorage.getItem('product')
        if(productLocal !== null) setProduct(productLocal)
    },[])

    //salvar no localStorage
    React.useEffect(() => {
        if (product !== null) window.localStorage.setItem('product', product)
    }, [product])

    function handleClick({target}) {
        setProduct(target.innerText)
    }

  return (
    <div>
        <h1>Preferência: {product}</h1>
        <button onClick={handleClick} style={{marginRight: '1rem'}}>Notebook</button>
        <button onClick={handleClick} >Smartphone</button>
        <Product product={product} />
    </div>
  )
}

export default App