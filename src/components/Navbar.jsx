import logo from '../assets/images/logo.png'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="navlinks">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="sign-buttons">
                    <a href="#" id='sign-in'>Sign In</a>
                    <a href="#" id='sign-up'>Sign Up</a>
                </div>

            </nav>
        </>
    )
}

export default Navbar