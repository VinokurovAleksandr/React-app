import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import NotFoundView from './pages/NotFoundView';
import PostIdPages from './pages/PostIdPages';
import { privateRoutes,publicRoutes } from '../router';
import Login from './pages/Login';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

export const AppRouter = () => {
    // const isAuth = true;

    const {isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }
    
    return (
        isAuth 
            ? 
               <Routes>
       
        {privateRoutes.map(route => 
            <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        <Route path='*' element={<Posts/>}/>
      </Routes>
            : 
            <Routes>
        {publicRoutes.map(route => 
            <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
                key={route.path}
            />
        )}
        {/* <Route path='/' element={ <About/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/posts/:id' element={<PostIdPages />} /> */}
        <Route path='*' element={<Login/>}/>
      </Routes>

    
)
};

export default AppRouter;