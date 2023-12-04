import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';
import moduleName from './components/PostItem'
import  PostItem  from './components/PostItem';
import PostsList from './components/PostsList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './components/hooks/usePosts';
import './styles/App.css'
import PostService from './components/API/PostService';


function App() {

  const [posts, setPosts] = useState([]);

  // [
  //   { id: 1, title: 'Javascript', body: 'Description' },
  //   { id: 2, title: 'React', body: 'Fuu' },
  //   { id: 3, title: 'HTML', body: 'Description' }
  // ]


  const [filter, setFilter] = useState(
    {
      sort: '',
      query: ''
    });
  const [modal, setModal] = useState(false);
  const soretedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
      fetchPosps()
    },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  async function fetchPosps() {
    setIsLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsLoading(false)
  
  };




  return (
    
    <div className='App'>
      <button onClick={fetchPosps}>Click</button>
      <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
        Registration post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
  
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isLoading ? <h3>Loading...</h3> : <PostsList
        remove={removePost}
        posts={soretedAndSearchedPosts}
        title={'Post about JS'} />
      } 
       
    
      </div>
  );
}

export default App;
