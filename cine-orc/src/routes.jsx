import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Cadastrar from "./pages/Cadastro/cadastro.jsx";
import Logar from "./pages/Login/login.jsx";
import HomeL from "./pages/Home/HomeLogado/homeL.jsx";
import Conta from "./pages/Conta/conta.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Registrar" element={<Cadastrar />} />
                <Route path="/Login" element={<Logar />} />
                <Route path="/Home" element={<HomeL />} />
                <Route path="/Conta" element={<Conta />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
