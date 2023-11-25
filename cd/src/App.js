import React from 'react';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';
import moduleName from './components/PostItem'
import './styles/App.css'

function App() {
 

  return (
    
      <div className='App'>
           {/* <Counter/> */}
      {/* <ClassCounter/> */}
      <div className='post'>
        <div className='post__content'>
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - lenguage programing
          </div>
          
        </div>
        <div className='post__btns'>
            <button className='btn'>Delete</button>
          </div>
      </div>
      </div>
     
    
  );
}

export default App;
