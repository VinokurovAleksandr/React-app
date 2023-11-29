import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


export const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
      });
    
    
  const addNewPost = (e) => {
      e.preventDefault();
      
      const newPost = {
          ...post, id: Date.now()
      }

    // setPosts([...posts, {...post, id: Date.now()}])
    // setTitle('')
      // setBody('')
      create(newPost)
    setPost({title: '',body: ''})

    // console.log(title);
    // console.log(body);
   
    // console.log(bodyInputRef.current.value);
    
  };
    
return (
  <form>
        {/* Управляємий компонент */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text'
          placeholder='Post name' />
        {/* <input
          ref={bodyInputRef} 
          type='text'
          /> */}
        {/* Не керований елемент */}
        <MyInput
          // ref={bodyInputRef}
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text'
          placeholder='Post text' />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
)
};

export default PostForm ;