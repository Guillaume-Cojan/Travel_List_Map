import Logo from "../assets/logo.png";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function NavBar({ currentUser, setCurrentUser, myStorage }) {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

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
                        <button
                            className="menu-item"
                            onClick={() => setShowRegister(true)}
                        >
                            Register
                        </button>
                        <button
                            className="menu-item"
                            onClick={() => setShowLogin(true)}
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
            {showRegister === true && (
                <Register
                    showRegister={showRegister}
                    setShowRegister={setShowRegister}
                />
            )}
            {showLogin === true && (
                <Login
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}
                    myStorage={myStorage}
                    setCurrentUser={setCurrentUser}
                />
            )}
        </div>
    );
}

export default NavBar;
