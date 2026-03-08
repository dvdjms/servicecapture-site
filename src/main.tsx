import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cookies from './pages/Cookies'
import Contact from './pages/Contact'

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>

    </StrictMode>
)
