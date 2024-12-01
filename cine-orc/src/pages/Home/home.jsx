import { useState } from 'react';
import './home.css'
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';
function Home() {

    const [filme, setFilme] = useState('');
    
    const handleHomeRedirect = () => {
        navigate('/Home');
    };



    return (
        <div>
            <Header redirect={handleHomeRedirect}/>
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