import Logo from "../assets/logo.png";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function NavBar({ currentUser }) {
    const [showRegister, setShowRegister] = useState(false);
    const [closeRegister, setCloseRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [closeLogin, setCloseLogin] = useState(false);

    function handleRegister() {
        setShowRegister(!showRegister);
        setCloseRegister(!showRegister);
    }

    function handleLogin() {
        setShowLogin(!showLogin);
        setCloseLogin(!showLogin);
    }

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
                            onClick={() => handleRegister()}
                        >
                            Register
                        </button>
                        <button
                            className="menu-item"
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
            {showRegister === true && <Register showRegister={showRegister} />}
            {closeRegister === true && (
                <span
                    className="registerCancel"
                    onClick={() => handleRegister()}
                >
                    Close
                </span>
            )}
            {showLogin === true && <Login showLogin={showLogin} />}
            {closeLogin === true && (
                <span className="registerCancel" onClick={() => handleLogin()}>
                    Close
                </span>
            )}
        </div>
    );
}

export default NavBar;
