import { Link } from "react-router-dom";

export const Navbar = () => {
return (
  <div className='navbar'>
        <div className='navbar__link'>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>
)
};

export default Navbar;