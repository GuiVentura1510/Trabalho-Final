import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <div className='filtrar-filmes'>
        <button>Sem filtro</button>
        <button>Por Ordem Alfabética</button>
        <button>Por Ordem de Lançamento</button>
    </div>
  )
}

export default Filter
