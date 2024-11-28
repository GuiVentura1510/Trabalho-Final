import './conta.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Conta() {

    const users = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();
    const handleHomeRedirect = () => {
        navigate('/')
    };
    const handleDelete = () => {
        const confirmDelete = window.confirm('Você tem certeza que deseja deletar sua conta?')
        if(confirmDelete){
            localStorage.removeItem('user');
            alert('Conta Deletada!')
            navigate('/')
        }

    };
    
    return (
        <div>
            <header>
                <button onClick={handleHomeRedirect} className='titulo'>Cine Orc</button>
            </header>
            <div className='perfil'>
                <h4>Nome</h4>
                <p className='resposta'> {users.nome}</p>
                <h4>Email</h4>
                <p className='resposta'> {users.email}</p>
                <h4>Senha</h4>
                <p className='resposta'> {users.senha}</p>
            </div>
            <div className='botoes'>
                <button>Atualizar Conta</button>
                <button onClick={handleDelete}>Deletar Conta</button>
            </div>
        </div>

    )
}

export default Conta;