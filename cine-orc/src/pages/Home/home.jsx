import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';
import LogoFilme from '../../components/LogoFilme';
import './home.css'

const language = import.meta.env.VITE_LANGUAGE
const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

function Home() {

    const [filme, setFilme] = useState('');
    const [pesquisados, setPesquisados] = useState('');
    const [topMovies, setTopMovies] = useState([]);
    const handleHomeRedirect = () => {
        navigate('/');
    };
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        setPesquisados(data.results)
    }

    const handleSearch = (pesquisa) => {
        setFilme(pesquisa);
        if (pesquisa === ''){
            setPesquisados(topMovies);
        }
        else{
            const filtrados = topMovies.filter((movie) => 
                movie.title.toLowerCase().includes(pesquisa.toLowerCase())
            );
            setPesquisados(filtrados);
        }
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&${language}`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div>
            <Header redirect={handleHomeRedirect} />
            <SearchBar onSearch={handleSearch}/>
            {/* <div className='search-bar'>
                <input
                    type='search'
                    placeholder='Digite o nome do filme'
                    value={filme}
                    onChange={(e) => setFilme(e.target.value)}
                ></input>
            </div> */}
            <Filter />
            <div className='container-filmes'>
                <h2 className='categoria'>Melhores Filmes</h2>
                <div className='filmes'>
                    {pesquisados && pesquisados.map((movie) => <LogoFilme key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

export default Home