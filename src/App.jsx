import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login'; 
import Home from './components/home';
import History from './components/History'; 
import Emisao from './components/Emisao'; 
import UNIELITE from './components/img/UNIELITE.png';
import ParentComponent from './components/ParentComponent';
import Certificate from './components/certificate';
import CertificateForm from './components/CertificateForm';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="headerback">
                    <div className="header">
                        <Link className="home" to="/">
                            <img src={UNIELITE} alt="Logo da UNI-ELITE" />
                            <h1>Sistema de Emissão de Certificados</h1>
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/history" element={<History />} /> 
                    <Route path="/emisao" element={<Emisao />} /> 
                    <Route path="/certificateForm" element={<CertificateForm />} /> 
                    <Route path="/parentComponent" element={<ParentComponent />} /> 
                    <Route path="/certificate" element={<Certificate />} /> 
                </Routes>

                <div className="foot">
                    <footer className="footer">
                        <p>Copyright © 2024 <a href="https://uem.mz/">UNI-ELITE</a> - Todos os Direitos Reservados</p>
                    </footer>
                </div>
            </div>
        </Router>
    );
}

export default App;
