import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/home.jsx'
import AppRoutes from './routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)
