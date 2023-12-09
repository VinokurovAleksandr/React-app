import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Counter } from './components/Counter';
// import ClassCounter from './components/ClassCounter';
// import moduleName from './components/PostItem'
// import  PostItem  from './components/PostItem';
import PostsList from '../PostsList';
import MyButton from '../UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import PostForm from '../PostForm';
// import MySelect from './components/UI/select/MySelect';
import PostFilter from '../PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import '../../styles/App.css'
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../UI/pagination/Pagination';


function Posts() {

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
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
  const res = await PostService.getAll(limit, page);
    setPosts(res.data)
    const totalCount = res.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  });

  

  useEffect(() => {
      fetchPosts()
    },[page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  const changePage = (page) => {
    setPage(page)
    
  }


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
      {postError && <h2>Error ${postError}</h2>}

      {isPostsLoading 
        ? <Loader />
        : <PostsList
        remove={removePost}
        posts={soretedAndSearchedPosts}
          title={'Post about JS'} />
      } 
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
       />
      
      </div>
  );
}

export default Posts;