import React, { useRef, useState } from 'react';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';
import moduleName from './components/PostItem'
import  PostItem  from './components/PostItem';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm'
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]);

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');


  // За допомогою хука useRef  ми можемо на пряму отримувати доступ до ДОМ елементу
  // const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    
      <div className='App'>
      <PostForm create={createPost} />
           {/* <Counter/> */}
      {/* <ClassCounter/> */}
      {/* <PostItem post={{id: 1, title:'Javascript', body: 'Description'} } /> */}
      {posts.length !== 0 ? <PostsList
        remove={removePost}
        posts={posts}
        title={'Post about JS'} /> : <h2 style={{textAlign: 'center'}}>Dont posts</h2>
   }
      
      </div>
     
    
  );
}

export default App;
