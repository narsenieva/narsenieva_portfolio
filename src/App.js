import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Work, Contact, Loader, Header} from "./components";
import './App.css';
import "./components/css/Header.css";
import logo from './components/images/NA.png'

function App() {
  const [loading, setLoading] = useState(false);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{ 
      setLoading(false);
      setFirstTimeLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
    {loading && firstTimeLoading ?
      <Loader>
      </Loader>
      
      :
      <div>
        <header>
        <img className='logo' src={logo} alt='logo'></img>
        <nav>
            <ul className='nav_links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>My Work</a></li>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Contact Me</a></li>
            </ul>
        </nav>
        </header>
      <Home></Home>
        
      </div>
    }
    </div>
  );
}

export default App;
