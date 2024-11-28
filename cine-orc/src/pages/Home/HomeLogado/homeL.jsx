import { useState } from 'react';
import './homeL.css'
import { Link } from 'react-router-dom';

function HomeL() {

    const [filme, setFilme] = useState('');
    
    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;

    return (
        <div>
            <header>
                <h3 className='titulo'>Cine Orc</h3>
                <nav className='tipos-filme'>
                    <button>Em Cartaz</button>
                    <button>Maior Nota</button>
                </nav>
                <div className="acessar-conta">
                    <Link to="/Conta" className='link'>
                        <button className='bem-vindo'>Seja Bem vindo, {nome.split(' ')[0]}!</button>
                    </Link>
                    <Link to='/'>
                        <button className='sair'> Sair</button>
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

export default HomeL