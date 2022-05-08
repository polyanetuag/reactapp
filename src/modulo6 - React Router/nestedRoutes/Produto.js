import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCustomizado from './ProdutoCustomizado'
import ProdutoDescricao from './ProdutoDescricao'

//ROTAS ANINHADAS

const Produto = () => {
  return (
    <div>
        <h1>Produto</h1>

        <nav>
            <NavLink to="">Descrição</NavLink>
            <NavLink to="avaliacao">Avaliação</NavLink>
            <NavLink to="customizado">Customizado</NavLink>
        </nav>

        <Routes>
            <Route path="/" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
        </Routes>
    </div>
  )
}

export default Produto