import './conta.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

function Conta() {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newSenha, setNewSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const users = JSON.parse(localStorage.getItem('user'));
    const nome = users.nome;

    const navigate = useNavigate();

    const handleImageClick = (movieId) => {
        navigate(`/Filme/${movieId}`);
    };

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isValidEmail = (email) => {
        return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
    };

    const handleUpdate = () => {
        const confirmConta = window.confirm('Você tem certeza que deseja alterar a sua conta?');
        if (confirmConta) {
            if (newEmail && !isValidEmail(newEmail)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            if (newName !== '') {
                users.nome = newName;
            }
            if (newEmail !== '') {
                users.email = newEmail;
            }
            if (newSenha !== '') {
                users.senha = newSenha;
            }

            localStorage.setItem('user', JSON.stringify(users));
            alert('Conta atualizada com sucesso!');
            window.location.reload();
        }
    };

    const handleHomeRedirect = () => {
        navigate('/Home');
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm('Você tem certeza que deseja deletar sua conta?');
        if (confirmDelete) {
            localStorage.removeItem('user');
            alert('Conta Deletada!');
            navigate('/');
        }
    };

    const logado = 'sim';

    return (
        <div>
            <Header redirect={handleHomeRedirect} logado={logado} username={nome} />
            <div className="perfil">
                <h4>Nome</h4>
                <input
                    className="resposta"
                    type="text"
                    placeholder={users.nome}
                    onChange={(e) => { setNewName(e.target.value); }}
                />
                <h4>Email</h4>
                <input
                    className="resposta"
                    type="text"
                    placeholder={users.email}
                    onChange={(e) => { setNewEmail(e.target.value); }}
                />
                <h4>Senha</h4>
                <div>
                    <input
                        className="resposta"
                        type={showSenha ? "text" : "password"}
                        placeholder={showSenha ? users.senha : '*'.repeat(users.senha.length)}
                        onChange={(e) => { setNewSenha(e.target.value); }}
                    />
                    <button
                        onClick={() => setShowSenha(!showSenha)}
                        style={{ marginLeft: '10px' }}
                    >
                        {showSenha ? "Ocultar" : "Mostrar"}
                    </button>
                </div>
            </div>
            <div className="botoes">
                <button onClick={handleUpdate}>Atualizar Conta</button>
                <button onClick={handleDelete}>Deletar Conta</button>
            </div>
            {favorites.length > 0 && (
                <div className="favoritos">
                    <h4>Favoritos</h4>
                    <div className="filmes">
                        {favorites.slice(0, 3).map((fav) => (
                            <div key={fav.id} className="filme-item">
                                <img
                                    src={fav.image}
                                    alt={`Capa de ${fav.title}`}
                                    className="filme-capa"
                                    onClick={() => handleImageClick(fav.id)}
                                />
                                <p className='titulo-filme'>{fav.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Conta;
