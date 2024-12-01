import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
function Header({redirect}) {
  return (
    <div>
      <header>
        <nav className='tipos-filme'>
        <button onClick={redirect} className="titulo">Cine Orc</button>
          <button>Em Cartaz</button>
          <button>Maior Nota</button>
          <div className="acessar-conta">
            <Link to="/Registrar" className='link'>
                <button>Criar Conta</button>
            </Link>
            <Link to="Login" className='link'>
                <button>Entrar</button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
