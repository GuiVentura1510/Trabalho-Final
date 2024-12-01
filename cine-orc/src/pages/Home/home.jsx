import { useState } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';
import './home.css'
function Home() {

    const [filme, setFilme] = useState('');
    
    const handleHomeRedirect = () => {
        navigate('/');
    };
    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;
    const logado = 'sim'

    return (
        <div>
            <Header redirect={handleHomeRedirect} logado={logado} username={nome}/>
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

export default Home