import React from 'react'
import './App.css';
import About from './layouts/About'
import Career from './layouts/Career'
import Community from './layouts/Community'
import Pricing from './layouts/Pricing'
import Product from './layouts/Product'
import Nav from './components/Nav'
import Home from './layouts/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <Nav />
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
