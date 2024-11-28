import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Logar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('user'))

        if(users.email === email && users.senha === senha){
            alert('Login Bem-Sucedido')
            navigate('/Home');
        }
    };


    return (
        <div className='container'>
            <div className='l-container'>
                <h1 className='logo'>Logo do Projeto</h1>
            </div>
            <div className='r-container'>
                <h1>Acesse Sua Conta</h1>
                <form onSubmit={handleSubmit}>
                    {/* <label for="email">Insira seu email: </label> */}
                    <input
                        type="email"
                        id="email" required
                        placeholder='Email'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />

                    {/* <label for="senha">Insira sua senha: </label> */}
                    <input
                        type="password"
                        id="senha" required
                        placeholder='Senha'
                        onChange={(e) => (setSenha(e.target.value))}
                    />

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