import './cadastro.css';
import { Link } from 'react-router-dom';


function Cadastrar() {

        return(

            <div className='container'>
                <div className='l-container'>
                    <h1 className='logo'>Logo do Projeto</h1>
                </div>
                <div className='r-container'>
                    <h1>Crie Sua Conta</h1>
                    <form>

                        <label for="nome">Insira seu nome: </label>
                        <input type="text" id="nome" required/>

                        <label for="email">Insira seu email: </label>
                        <input type="email" id="email" required/>

                        <label for="senha">Insira sua senha: </label>
                        <input type="password" id="senha" required/>

                        <button type="submit"> CRIAR </button>
                    </form>
                    <Link to="/Login" className='link'>
                        <p>Já possui um Login?</p>
                    </Link>
                </div>
            </div>
            
        )
}

export default Cadastrar;