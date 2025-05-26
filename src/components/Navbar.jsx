import { useState } from 'react';
import logo from '../assets/images/logo.png';
import menuIcon from '../assets/images/menu.png';
import closeIcon from '../assets/images/close.png';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'expanded' : ''}`}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className={`sign-buttons ${isMenuOpen ? 'active' : ''}`}>
                <a href="#" id="sign-in">Sign In</a>
                <a href="#" id="sign-up">Sign Up</a>
            </div>

            <div className="menu-toggle" onClick={toggleMenu}>
                <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu icon" />
            </div>
        </nav>
    );
}

export default Navbar;
