import React from 'react'
import './SearchBar.css'
function SearchBar(pesquisar) {
    const [filme, setFilme] = useState('');
  return (
    <div className='search-bar'>
      <form >
        <input
            type='search'
            placeholder='Digite o nome do filme'
            value={filme}
            onChange={(e) => setFilme(e.target.value)} //ver com o guilerme oq isso significa
        ></input>
      </form>
    </div>
  )
}

export default SearchBar
