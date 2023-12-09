import React from 'react';
import { BrowserRouter, Link, Redirect } from "react-router-dom";


import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
// import Header from './components/header/Header';


function App() {

  return (
      <BrowserRouter>
     <Navbar/>
    <AppRouter/>
      </BrowserRouter>
  )
};

export default App;
