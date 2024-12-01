import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Cadastrar from "./pages/Cadastro/cadastro.jsx";
import Logar from "./pages/Login/login.jsx";
import HomeL from "./pages/Home/HomeLogado/homeL.jsx";
import Conta from "./pages/Conta/conta.jsx";
import Teste from "./pages/Teste/teste.jsx";
import Movie from "./pages/Movie/movie.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Registrar" element={<Cadastrar />} />
                <Route path="/Login" element={<Logar />} />
                <Route path="/Conta" element={<Conta />} />
                <Route path="/Teste" element={<Teste />} />
                <Route path="/Filme/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
