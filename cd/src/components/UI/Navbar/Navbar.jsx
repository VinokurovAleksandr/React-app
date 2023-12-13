import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  };

return (
  <div className='navbar'>
    <MyButton onClick={logout}>Log out</MyButton>
        <div className='navbar__link'>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
)
};

export default Navbar;