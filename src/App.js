// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './components/Content';
import Nav from './components/Nav';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
       <Nav/>
       <Home/>
       <Content/>
       <Footer/>
       
     
      
      
    </div>
  );
}

export default App;
