import React from 'react';
import PostItem from './PostItem'


export const PostList = ({posts}) => {
return (
<div>
    <h1 style={{textAlign: 'center'}}>Posts lis</h1>
      <div>
        {posts.map(post => 
          <div><PostItem post={post} key={post.id} /></div>
        )}
      </div>
</div>
)
};

export default PostList;