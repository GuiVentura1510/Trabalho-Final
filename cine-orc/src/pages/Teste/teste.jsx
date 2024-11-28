import { useEffect, useState } from 'react';
import './teste.css'
import { Link } from 'react-router-dom';

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

function Teste() {

    const [filme, setFilme] = useState('');
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    },[])

    return (
        <div>
                {topMovies && topMovies.map((movie)=><p>{movie.title}</p>)}
        </div>
    )
}

export default Teste