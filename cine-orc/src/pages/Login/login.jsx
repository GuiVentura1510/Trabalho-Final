import './login.css';
import { Link } from 'react-router-dom';


function Logar() {

        return (
            
            <div className='container'>
                <div className='l-container'>
                    <h1 className='logo'>Logo do Projeto</h1>
                </div>
                <div className='r-container'>
                    <h1>Acesse Sua Conta</h1>
                    <form>
                        <label for="email">Insira seu email: </label>
                        <input type="email" id="email" required/>

                        <label for="senha">Insira sua senha: </label>
                        <input type="password" id="senha" required/>

                        <button type="submit"> LOGIN </button>
                    </form>
                    <Link to="/Registrar" className='link'>
                        <p>Cadastre-se</p>
                    </Link>
                </div>
            </div>
        )
}

export default Logar;