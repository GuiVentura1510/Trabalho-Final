import './conta.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Conta() {

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newSenha, setNewSenha] = useState('');

    const users = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    const isValidEmail = (email) => {
        return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
    };


    const handleUpdate = () => {
        const confirmConta = window.confirm('Você tem certeza que deseja alterar a sua conta?');
        if (confirmConta) {
            if (newEmail && !isValidEmail(newEmail)) {
                alert ('Insira um Email Valido!');
                window.location.reload();
                return;
            }
            // Atualiza os valores apenas se forem preenchidos
            if (newName !== '') {
                users.nome = newName;
            }
            if (newEmail !== '') {
                users.email = newEmail;
            }
            if (newSenha !== '') {
                users.senha = newSenha;
            }

            // Salva o objeto atualizado no localStorage
            localStorage.setItem('user', JSON.stringify(users));
            alert('Conta atualizada com sucesso!');
            window.location.reload();

        }
    };



    const handleHomeRedirect = () => {
        navigate('/Home')
    };
    const handleDelete = () => {
        const confirmDelete = window.confirm('Você tem certeza que deseja deletar sua conta?')
        if (confirmDelete) {
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
                <input
                    className='resposta'
                    placeholder={users.nome}
                    onChange={(e) => { setNewName(e.target.value) }}
                ></input>
                <h4>Email</h4>
                <input
                    className='resposta'
                    type='email'
                    id="email" required
                    placeholder={users.email}
                    onChange={(e) => { setNewEmail(e.target.value) }}
                ></input>
                <h4>Senha</h4>
                <input
                    className='resposta'
                    placeholder={users.senha}
                    onChange={(e) => { setNewSenha(e.target.value) }}
                ></input>
            </div>
            <div className='botoes'>
                <button onClick={handleUpdate}>Atualizar Conta</button>
                <button onClick={handleDelete}>Deletar Conta</button>
            </div>
        </div>

    )
}

export default Conta;