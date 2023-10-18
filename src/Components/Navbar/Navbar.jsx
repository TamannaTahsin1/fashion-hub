import { Link, NavLink } from "react-router-dom";
import iconImg from '../../assets/logo.png'

const Navbar = () => {
    const navLinks = (
        <>
        <li className="font-bold">
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white font-bold bg-blue-900" : ""
          }>
          HOME
        </NavLink>
      </li>
        <li className="font-bold">
        <NavLink
          to='/addProducts'
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white font-bold bg-blue-900" : ""
          }>
          ADD PRODUCTS
        </NavLink>
      </li>
        <li className="font-bold">
        <NavLink
          to='/cart'
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white font-bold bg-blue-900" : ""
          }>
        CART
        </NavLink>
      </li>
        <li className="font-bold">
        <NavLink
          to='/sponsor'
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white font-bold bg-blue-900" : ""
          }>
        SPONSOR
        </NavLink>
      </li>       
        </>
    )
  return (
    <div className="container mx-auto py-5">
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {navLinks}
            </ul>
          </div>
          <div className="flex items-center justify-around">
          <div>
          <img src={iconImg} alt=""  className="w-16 h-16"/>
          </div>
          <a className='btn btn-ghost normal-case text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'>Fashion Hub</a>

          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            {navLinks}
          </ul>
        </div>
        <div className='navbar-end'>
          <Link to='/login'>
          <button className="btn btn-accent">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
