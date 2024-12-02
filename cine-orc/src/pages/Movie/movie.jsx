import { useEffect, useState } from 'react';
import './movie.css'
import { Link, useParams } from 'react-router-dom';
import LogoFilme from '../../components/LogoFIlme';
import Header from '../../components/Header'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API
const language = import.meta.env.VITE_LANGUAGE

function Movie() {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&${language}`
        getMovie(movieUrl)
    },[])

    return (
        <div className='paginaF'>
            <Header/>
            <div className='bodyF'>
                {movie && <>
                <LogoFilme movie={movie} showLink={false}/>
                </>}
                <div className='descricao'>
                    <h3 className='descricaoT'>Descricao</h3>
                    <p>{movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie