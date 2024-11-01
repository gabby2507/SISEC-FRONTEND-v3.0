import { Link, Navigate } from 'react-router-dom';
import { FaFileAlt, FaHistory } from 'react-icons/fa';
import './home.css';

function Home() {
    const isAuthenticated = !!localStorage.getItem('sisecToken');

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div className="home-container">
            <div className="nav-container">
                <Link to="/emisao" className="nav-item">
                    <FaFileAlt className="nav-icon" />
                    <span>Emissão</span>
                </Link>
                <Link to="/history" className="nav-item">
                    <FaHistory className="nav-icon" />
                    <span>Histórico</span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
