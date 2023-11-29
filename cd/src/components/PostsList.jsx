import React from 'react';
import PostItem from './PostItem'


export const PostList = ({posts,title, remove}) => {
return (
<div>
    <h1 style={{textAlign: 'center'}}>{title}</h1>
      <div>
        {posts.map((post,index) => 
          <div>
            <PostItem
              remove={remove}
              number={index +1}
              post={post}
              key={post.id} />
          </div>
        )}
      </div>
</div>
)
};

export default PostList;