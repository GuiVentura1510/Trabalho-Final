import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoCineOrc from '../../images/LogoCineOrc.jpeg'


function Logar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('user'))

        if (!users) {
            alert('Essa conta não está registrada! Cadastre-se!')
            navigate('/Registrar');
            return;
        }


        if (users.email === email && users.senha === senha) {
            alert('Login Bem-Sucedido')
            navigate('/Home');
        }
        else {
            alert('Usuario ou Senha Errados')
        }
    };


    return (
        <div className='container'>
            <div className='l-container'>
                <img src={LogoCineOrc} className='logo'></img>
            </div>
            <div className='r-container'>
                <h1>Acesse Sua Conta</h1>
                <form onSubmit={handleSubmit}>
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