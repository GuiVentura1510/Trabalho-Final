import './cadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Cadastrar() {

     //criei as variaveis que serão atualizadas na medida em que o usuario digita.
     const [nome, setNome] = useState('')
     const [email, setEmail] = useState('')
     const [senha, setSenha] = useState('')
 
 
     const navigate = useNavigate();
 
 
     const handleSubmit = (event) => {
         //evita com que a pagina recarregue quando apertar o botao, assim fazendo-o ir à pagina de login
         event.preventDefault();
         //cria um user com as informações    
         const userData = {
             nome,
             email,
             senha
         };
         //armazena o user no Local Storage
         localStorage.setItem('user', JSON.stringify(userData));
 
 
         alert('Cadastro Realizado!');
 
 
         //manda o usuario para a pagina de login assim que ele termina o cadastro
         navigate('/Login');
     }
 
 
 

    return (

        <div className='container'>
            <div className='l-container'>
                <h1 className='logo'>Logo do Projeto</h1>
            </div>
            <div className='r-container'>
                <h1>Crie Sua Conta</h1>
                <form onSubmit={handleSubmit}>

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