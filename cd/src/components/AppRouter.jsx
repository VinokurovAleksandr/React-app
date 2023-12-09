import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import NotFoundView from './pages/NotFoundView';
import PostIdPages from './pages/PostIdPages';

export const AppRouter = () => {
return (
    <Routes>
        <Route path='/' element={ <About/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route exact path='/posts' element={<Posts />} />
        <Route exact path='/posts/:id' element={<PostIdPages />} />
        <Route path='*' element={<NotFoundView/>}/>
      </Routes>
)
};

export default AppRouter;