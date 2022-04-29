import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Work, Contact, Loader} from "./components";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{ 
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
    {loading ?
      <Loader></Loader>
      : 
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="work" element={<Work/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
