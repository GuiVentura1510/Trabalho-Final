import { useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import Header from '../../components/header';

function Home() {

    const [filme, setFilme] = useState('');



    return (
        <div>
            <Header/>   
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