import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
import ContactMe from "./components/contactMe";
import Projects from  "./components/Projects";
import Skills from  "./components/Skills";

function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contactme' element={<ContactMe/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/skills' element={<Skills/>} />

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
                    {/*<Navigate to="/" />*/}
                </Routes>
            </Router>
        </>
    );
}

export default App;
