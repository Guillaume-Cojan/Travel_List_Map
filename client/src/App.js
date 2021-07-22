import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Map from "./components/Map";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <div className="App">
            <Navbar currentUser={currentUser} />
            <Header />
            <Map currentUser={currentUser} />
            <Footer />
        </div>
    );
}

export default App;
