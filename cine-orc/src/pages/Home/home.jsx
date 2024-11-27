import './home.css'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <header>
                <h3 className='titulo'>Cine Orc</h3>
                <nav className='tipos-filme'>
                    <button>Em Cartaz</button>
                    <button>Maior Nota</button>
                </nav>
                <div className="acessar-conta">
                    <Link to="/Registrar" className='link'>
                        <button>Criar Conta</button>
                    </Link>
                    <Link to="Login" className='link'>
                        <button>Entrar</button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Home