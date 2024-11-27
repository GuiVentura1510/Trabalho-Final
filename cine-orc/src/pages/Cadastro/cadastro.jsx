import './cadastro.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Cadastrar() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <div className='container'>
            <div className='l-container'>
                <h1 className='logo'>Logo do Projeto</h1>
            </div>
            <div className='r-container'>
                <h1>Crie Sua Conta</h1>
                <form>

                    <input
                        type="text"
                        id="nome" required
                        placeholder='Nome'
                        onChange={(e) => (setNome(e.target.value))}
                    />

                    <input
                        type="email"
                        id="email" required
                        placeholder='Email'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    <input
                        type="password"
                        id="senha" required
                        placeholder='Senha'
                        onChange={(e) => { setSenha(e.target.value) }}
                    />

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