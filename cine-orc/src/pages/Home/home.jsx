import { useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

function Home() {

    const [filme, setFilme] = useState('');



    return (
        <div>
            <header>
                <h3 className='titulo'>Cine Orc</h3>
                <nav className='tipos-filme'>
                    <button>Em Cartaz</button>
                    <button>Maior Nota</button>
                </nav>
                <div className="acessar-conta">
                    <Link to="/Registrar" className='link'>
                        <button>Criar Conta</button>
                    </Link>
                    <Link to="Login" className='link'>
                        <button>Entrar</button>
                    </Link>
                </div>
            </header>
            <div className='search-bar'>
                <input
                    type='search'
                    placeholder='Digite o nome do filme'
                    value={filme}
                    onChange={(e) => setFilme(e.target.value)}
                ></input>
            </div>
            <div className='filtrar-filmes'>
                <button>Sem filtro</button>
                <button>Por Ordem Alfabética</button>
                <button>Por Ordem de Lançamento</button>
            </div>
        </div>
    )
}

export default Home