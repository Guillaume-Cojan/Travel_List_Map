import Logo from "../assets/logo.png";

function NavBar({ currentUser }) {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" className="logo" />
            <div>
                {currentUser ? (
                    <div className="navbar-links">
                        <button className="menu-item">Home</button>
                        <button className="menu-item">My Places</button>
                        <button className="menu-item">Logout</button>
                    </div>
                ) : (
                    <div className="navbar-links">
                        <button className="menu-item">Home</button>
                        <button className="menu-item">Register</button>
                        <button className="menu-item">Login</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
