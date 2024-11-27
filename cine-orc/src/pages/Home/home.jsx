import './home.css'
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
                    <button>Criar Conta</button>
                    <button>Entrar</button>
                </div>
            </header>
        </div>
    )
}

export default Home