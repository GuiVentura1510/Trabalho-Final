import {useNavigate} from "react-router-dom"
import './LogoFilme.css'

const imageUrl =import.meta.env.VITE_IMG

const LogoFilme = ({movie, showLink=true}) => {
  const navigate = useNavigate()

  const handleImageClick= () =>{
    navigate(`/Filme/${movie.id}`)
  }

  return (
    <div className="logo-filme">
        <img src={imageUrl + movie.poster_path} alt={movie.title} onClick={handleImageClick}  />
        <h2>{movie.title}</h2>
    </div>
  )
}

export default LogoFilme
