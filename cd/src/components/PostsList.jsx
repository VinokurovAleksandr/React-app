import React from 'react';
import PostItem from './PostItem'


export const PostList = ({posts,title}) => {
return (
<div>
    <h1 style={{textAlign: 'center'}}>{title}</h1>
      <div>
        {posts.map(post => 
          <div><PostItem post={post} key={post.id} /></div>
        )}
      </div>
</div>
)
};

export default PostList;