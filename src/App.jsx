import React from "react";
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;