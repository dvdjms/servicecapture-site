import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import { Download } from './pages/Download'
import { useEffect } from 'react'


function AppRoutes() {

    const navigate = useNavigate();

    useEffect(() => {
        const redirect = sessionStorage.getItem("redirect");
        if (redirect) {
            sessionStorage.removeItem("redirect");
            navigate(redirect, { replace: true });
        }
    }, []);

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/download" element={<Download />} />
            </Routes>
        </>
    );
}



function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App
