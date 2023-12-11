import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";


import './styles/App.css'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
// import Header from './components/header/Header';


function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
 
  )
};

export default App;
