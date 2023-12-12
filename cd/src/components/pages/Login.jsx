import React, { useContext } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { AuthContext } from '../../context';


export const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }
return (
<div>
        <h2>Login</h2>
        <form onSubmit={login}>
            <MyInput type='text' placeholder='Login'/>
            <MyInput type='password' placeholder='Password' /> 
            <MyButton>Login</MyButton>
        </form>
</div>
)
};

export default Login;