import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Filter from '../../../components/Filter'
import '../../../components/Header.css'
import '../home.css'
import '../../../components/SearchBar.css'

function HomeL() {

    const [filme, setFilme] = useState('');
    
    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;
    const logado = 'sim'

    return (
        <div className='HomeL'>
            <Header logado={logado} username={nome}/>
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