import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Filter from '../../../components/Filter';
import SearchBar from '../../../components/SearchBar'; 
import '../home.css';
import '../../../components/SearchBar.css';
import LogoFilme from '../../../components/LogoFilme';

const language = import.meta.env.VITE_LANGUAGE;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

function HomeL() {
    const [filme, setFilme] = useState('');
    const [topMovies, setTopMovies] = useState([]);
    const [pesquisados, setPesquisados] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
        setPesquisados(data.results); 
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&${language}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    const handleSearch = (pesquisa) => {
        setFilme(pesquisa);
        if (pesquisa === '') {
            setPesquisados(topMovies); 
        } else {
            const filtrados = topMovies.filter((movie) =>
                movie.title.toLowerCase().includes(pesquisa.toLowerCase())
            );
            setPesquisados(filtrados);
        }
    };

    // Obtendo o nome do usuário logado
    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;
    const logado = 'sim';

    return (
        <div className='HomeL'>
            <Header logado={logado} username={nome} />
            <SearchBar onSearch={handleSearch} /> 
            <Filter />
            <div className='filmes'>
                {pesquisados && pesquisados.slice(0, 9).map((movie) => (
                    <LogoFilme key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default HomeL;
