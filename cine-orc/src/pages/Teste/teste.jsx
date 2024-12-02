import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoFilme from '../../components/LogoFilme';
import Header from '../../components/Header';
import '../../components/SearchBar.css'
import '../Home/home.css'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

function Teste() {

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
        <div className='container-home'>
            <Header/>
            <div className='container-filmes'>
                <h2 className='categoria'>Melhores Filmes</h2>
                <div className='filmes'>
                    {topMovies && topMovies.map((movie)=><LogoFilme key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}

export default Teste