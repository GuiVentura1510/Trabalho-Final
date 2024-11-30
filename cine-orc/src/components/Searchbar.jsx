import React from 'react'

function SearchBar() {
    const [filme, setFilme] = useState('');
  return (
    <div className='search-bar'>
        <input
            type='search'
            placeholder='Digite o nome do filme'
            value={filme}
            onChange={(e) => setFilme(e.target.value)}
        ></input>
    </div>
  )
}

export default SearchBar
