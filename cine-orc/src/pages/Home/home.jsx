import { useState } from 'react';
import './home.css'
import Header from '../../components/header';
import SearchBar from '../../components/Searchbar';
import Filter from '../../components/Filter';
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
            <Filter/>
        </div>
    )
}

export default Home