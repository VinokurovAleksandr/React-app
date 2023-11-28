import React from 'react';
import style from './MyButton.module.css'

export const Mybutton = (props) => {

return (
    <button className={style.myBtn}>
        Create pos
        {/* {props.children} */}
</button>
)
};

export default Mybutton;