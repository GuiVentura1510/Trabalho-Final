import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [filme, setFilme] = useState('');
    
    const handleChange = (e) => {
        setFilme(e.target.value);
        onSearch(e.target.value); 
    };

    return (
        <div className='search-bar'>
            <form>
                <input
                    type='search'
                    placeholder='Digite o nome do filme'
                    value={filme}
                    onChange={handleChange} 
                ></input>
            </form>
        </div>
    );
}

export default SearchBar;
