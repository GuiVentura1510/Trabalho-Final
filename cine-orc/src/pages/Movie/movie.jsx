import { useEffect, useState } from 'react';
import './movie.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import LogoFilme from '../../components/LogoFilme';
import Header from '../../components/Header'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const language = import.meta.env.VITE_LANGUAGE

function Movie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [favorito, setFavorito] = useState(false);
    const [cast, setCast] = useState([]);


    // Função para adicionar aos favoritos
    const handleFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setFavorito(true);
    };

    // Função para remover dos favoritos
    const handleRemoveFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = favorites.filter(fav => fav.id !== movie.id); // Remove o filme dos favoritos
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorito(false);
    };

    // Função para obter o filme da API
    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };
    const getCast = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCast(data.cast);
    };
    
    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&${language}`;
        getMovie(movieUrl);
    }, [id]);

    useEffect(() =>{
        const castUrl = `${moviesURL}${id}/credits?${apiKey}&${language}`
        getCast(castUrl)
    }, [id])
    // Verificar se o filme já está nos favoritos
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (movie) {
            const isFavorite = favorites.some(fav => fav.id === movie.id);
            setFavorito(isFavorite);
        }
    }, [movie]);

    const navigate = useNavigate()
    const handleHomeRedirect = () => {
        navigate('/')
    };

    return (
        <div className='paginaF'>
            <Header redirect={handleHomeRedirect}/>
            <div className='bodyF'>
                {movie && (
                    <>
                        <LogoFilme movie={movie} showLink={false} />
                    </>
                )}
                <div className='descricao'>
                    <h4 className='sinopse'>Sinopse</h4>
                    <p>{movie?.overview}</p>
                    <h4>Data de Lançamento</h4>
                    <p className='date'>{movie?.release_date}</p>
                    <h4>Nota</h4>
                    <p className='nota'>{movie?.vote_average}</p>
                    <div className='favoritos'>
                        {favorito ? (
                            <button 
                            className='remove'
                            onClick={handleRemoveFavorites}>Remover dos Favoritos</button>
                        ) : (
                            <button 
                            className='add'
                            onClick={handleFavorites}
                            >Adicionar aos Favoritos</button>
                        )}
                    </div>
                    <div>
                    {cast.length > 0 && (
                        <div className='elenco'>
                            <h4>Elenco</h4>
                            <div className='atores-container'>
                                {cast.slice(0, 5).map(actor => (
                                    <div key={actor.id} className="ator">
                                        {actor.profile_path && (
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                                                alt={actor.name} 
                                                className='atores' 
                                            />
                                        )}
                                        <div className='nomeator'>
                                        <p>{actor.name}</p>  {/* Nome do ator/atriz */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Movie;
