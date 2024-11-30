import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Filter from '../../../components/Filter'
import '../../../components/Header.css'
import './homeL.css'
import '../home.css'
import '../../../components/SearchBar.css'

function HomeL() {

    const [filme, setFilme] = useState('');
    
    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;

    return (
        <div className='HomeL'>
            <header>
                <h3 className='titulo'>Cine Orc</h3>
                <nav className='tipos-filme'>
                    <button>Em Cartaz</button>
                    <button>Maior Nota</button>
                </nav>
                <div className="acessar-conta">
                    <Link to="/Conta" className='link'>
                        <button className='bem-vindo'> {nome.split(' ')[0]}</button>
                    </Link>
                    <h3 className='divisao'>||</h3>
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
            <Filter/>
        </div>
    )
}

export default HomeL