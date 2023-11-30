import React, { useMemo, useRef, useState } from 'react';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';
import moduleName from './components/PostItem'
import  PostItem  from './components/PostItem';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'React', body: 'Fuu' },
    { id: 3, title: 'HTML', body: 'Description' }
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')


  const options = [
    { value: 'title', name: 'From title' },
    { value: 'body', name: 'From text' }
  ];


  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
    a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const soretedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  },[searchQuery, sortedPosts])
   
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');


  // За допомогою хука useRef  ми можемо на пряму отримувати доступ до ДОМ елементу
  // const bodyInputRef = useRef();
 
 



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  const sortPost = (sort) => {
    setSelectedSort(sort)
  };

  return (
    
      <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={'Search...'}
        />
        <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue='Sort'
        options={options}
      />
      </div>

      {soretedAndSearchedPosts.length !== 0 ? <PostsList
        remove={removePost}
        posts={soretedAndSearchedPosts}
        title={'Post about JS'} />
        :
        <h2 style={{ textAlign: 'center' }}>
          Dont posts
        </h2>
   }
      
      </div>
  );
}

export default App;
