import { useEffect, useState } from 'react';
import './movie.css'
import { Link, useParams } from 'react-router-dom';
import LogoFilme from '../../components/LogoFIlme';
import Header from '../../components/Header'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

function Movie() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div className='paginaF'>
            <Header />
            <div className='bodyF'>
                {movie && <>
                    <LogoFilme movie={movie} showLink={false} />
                </>}
                <div className='descricao'>
                    <h4 className='sinopse'>Sinopse</h4>
                    <p>{movie?.overview}</p>
                    <h4>Data de Lançamento</h4>
                    <p className='date'> {movie?.release_date}</p>
                    <h4>Nota</h4>
                    <p className='nota'> {movie?.vote_average}</p>
                    <div className='favoritos'>
                        <button>Adicionar aos Favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie