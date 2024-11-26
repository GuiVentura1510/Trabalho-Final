import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
