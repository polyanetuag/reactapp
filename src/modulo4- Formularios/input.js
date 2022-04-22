import React from 'react'

const App = () => {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>Nome</label>
        <input
            id='nome'
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            />
        <label htmlFor='email'>Email</label>
        <input
            id='email'
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default App