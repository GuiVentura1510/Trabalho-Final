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
    const [cinema, setCinema] = useState([])
    const handleHomeRedirect = () => {
        navigate('/');
    };
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        setPesquisados(data.results)
    }
    const getCinema = async (url) =>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setCinema(data.results)
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
    useEffect(() =>{
        const cinemaUrl = `${moviesURL}now_playing?${apiKey}&language=${language}`;
        getCinema(cinemaUrl)
    },[])

    return (
        <div>
            <Header redirect={handleHomeRedirect} />
            <SearchBar onSearch={handleSearch}/>
            <Filter />
            <div className='container-filmes'>
                <h2 className='categoria'>Maior nota</h2>
                <div className='filmes'>
                    {pesquisados && pesquisados.slice(0,9).map((movie) => <LogoFilme key={movie.id} movie={movie} />)}
                </div>
                <h2 className='categoria'> Em Cartaz</h2>
                <div className='filmes'>
                    {cinema && cinema.slice(0,9).map((movie) => <LogoFilme key={movie.id} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}

export default Home