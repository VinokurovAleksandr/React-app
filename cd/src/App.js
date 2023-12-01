import React, { useMemo, useRef, useState } from 'react';
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
import './styles/App.css'


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'React', body: 'Fuu' },
    { id: 3, title: 'HTML', body: 'Description' }
  ]);


  const [filter, setFilter] = useState(
    {
      sort: '',
      query: ''
    });
    const [modal, setModal] = useState()

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
    a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const soretedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts])
   
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };


  return (
    
    <div className='App'>
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

      <PostsList
        remove={removePost}
        posts={soretedAndSearchedPosts}
        title={'Post about JS'} />
      </div>
  );
}

export default App;
