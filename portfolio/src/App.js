import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';
const App = () => {
  return (
    <div>
        <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/project" element={ <Project/> } />
       </Routes>
      </Router>
    </div>
  )
}

export default App