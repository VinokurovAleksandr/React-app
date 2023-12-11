import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';


export const Login = () => {
return (
<div>
        <h2>Login</h2>
        <form>
            <MyInput type='text' placeholder='Login'/>
            <MyInput type='password' placeholder='Password' /> 
            <MyButton>Login</MyButton>
        </form>
</div>
)
};

export default Login;