import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Cadastrar from "./pages/Cadastro/cadastro.jsx";
import Logar from "./pages/Login/login.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Registrar" element={<Cadastrar />} />
                <Route path="/Login" element={<Logar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
