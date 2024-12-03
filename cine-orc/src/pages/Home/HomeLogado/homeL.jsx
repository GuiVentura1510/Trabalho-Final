import {useEffect, useState } from 'react';
// import { navigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Filter from '../../../components/Filter'
import '../home.css'
import '../../../components/SearchBar.css'
import LogoFilme from '../../../components/LogoFilme';
const language = import.meta.env.VITE_LANGUAGE
const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

function HomeL() {

    const [filme, setFilme] = useState('');
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
    }
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&${language}`
        getTopRatedMovies(topRatedUrl)
    },[])
    
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
            <div className='filmes'>
                    {topMovies && topMovies.slice(0,10).map((movie)=><LogoFilme key={movie.id} movie={movie}/>)}
                </div>
        </div>
    )
}

export default HomeL