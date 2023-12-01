import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';



export const PostFilter = ({filter, setFilter}) => {

    const options = [
    { value: 'title', name: 'From title' },
    { value: 'body', name: 'From text' }
    ];
    
return (
  <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder={'Search...'}
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Sort'
        options={options}
      />
      </div>
)
};

export default PostFilter;