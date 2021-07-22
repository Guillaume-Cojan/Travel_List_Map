import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import Map from "./components/Map";
//import { BrowserRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Map />
            <Footer />
        </div>
    );
}

export default App;
