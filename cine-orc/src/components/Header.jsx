import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
function Header({redirect, logado, username}) {
  return (
    <div>
      <header>
        <nav className='tipos-filme'>
        <button onClick={redirect} className="titulo">Cine Orc</button>
          <button className='categorias'>Em Cartaz</button>
          <button className='categorias'>Maior Nota</button>
          <div className="acessar-conta">
            {logado ?(
              <div className='buttonL'>
                <Link to="/Conta" className='link'>
                  <button className='bem-vindo'> {username.split(' ')[0]}</button>
                </Link>
                <Link to='/'>
                  <button className='sair'> Sair</button>
                </Link>
              </div>
            ):(
              <div className='buttonL'>
            <Link to="/Registrar" className='link'>
                <button className='criar-conta'>Criar Conta</button>
            </Link>
            <Link to="Login" className='link'>
                <button className='login'>Entrar</button>
            </Link>
            </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
