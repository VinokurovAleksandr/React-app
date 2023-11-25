import React, {useState} from 'react'

export const Counter = () => {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('')

    function increment() {
   
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    const onChangeInput = e => {
        setValue(e.target.value)

    
    }
    
    return (
        <>
            <h1>{likes}</h1>
            <h2>{value}</h2>

            <input
                type='text'
                value={value}
                onChange={onChangeInput}
            >
            </input>
            <button onClick={increment} >+</button>
            <button onClick={decrement}>-</button>
        </>
   
    )
};

