import {Link} from "react-router-dom"
import './LogoFilme.css'

const imageUrl =import.meta.env.VITE_IMG

const LogoFilme = ({movie, showLink=true}) => {
  return (
    <div className="logo-filme">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        {showLink && <Link to ={`/FIlme/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default LogoFilme
