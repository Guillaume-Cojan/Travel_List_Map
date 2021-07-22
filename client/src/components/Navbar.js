import Logo from "../assets/logo.png";

function NavBar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" className="logo" />
            <div className="navbar-links">
                <p className="menu-item">Home</p>
                <p className="menu-item">My Places</p>
                <p className="menu-item">Login</p>
                <p className="menu-item">Register</p>
            </div>
        </div>
    );
}

export default NavBar;
