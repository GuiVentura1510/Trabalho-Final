import { useEffect, useState } from 'react';
import './movie.css'
import { Link, useParams } from 'react-router-dom';
import LogoFilme from '../../components/LogoFilme';
import Header from '../../components/Header'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const language = import.meta.env.VITE_LANGUAGE

function Movie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [favorito, setFavorito] = useState(false);   

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

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&${language}`;
        getMovie(movieUrl);
    }, [id]);

    // Verificar se o filme já está nos favoritos
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (movie) {
            const isFavorite = favorites.some(fav => fav.id === movie.id);
            setFavorito(isFavorite);
        }
    }, [movie]);

    return (
        <div className='paginaF'>
            <Header />
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
                </div>
            </div>
        </div>
    );
}

export default Movie;
