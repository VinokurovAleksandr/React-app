import React, { useState } from 'react';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';
import moduleName from './components/PostItem'
import  PostItem  from './components/PostItem';
import PostsList from './components/PostsList';
import Mybutton from './components/UI/button/MyButton';
import './styles/App.css'


function App() {
  const [posts, setPost] = useState([
      {id: 1, title:'Javascript', body: 'Description'},
      {id: 2, title:'Javascript 2', body: 'Description'},
      {id: 3, title:'Javascript 3', body: 'Description'}
    ])



  return (
    
      <div className='App'>
      <form>
        <input type='text' placeholder='Post name'/>
        <input type='text' placeholder='Post text' />
        <Mybutton/>
      </form>
           {/* <Counter/> */}
      {/* <ClassCounter/> */}
      {/* <PostItem post={{id: 1, title:'Javascript', body: 'Description'} } /> */}
      <PostsList posts={posts} title={'Post about JS'} />
  
      </div>
     
    
  );
}

export default App;
