/** @format */

import { Link, NavLink } from "react-router-dom";
import iconImg from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  // for theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const handleToggle = (e) => {
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  useEffect(() =>{
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute("data-theme", localTheme)
  }, [theme])
  // accessing context
  const { user, logOut } = useContext(AuthContext);
  // for signing out
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li className='font-bold'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-purple-600"
              : ""
          }>
          HOME
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/addProducts'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-purple-600"
              : ""
          }>
          ADD PRODUCTS
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/cart'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-purple-600"
              : ""
          }>
          CART
        </NavLink>
      </li>
      <li className='font-bold'>
        <NavLink
          to='/sponsor'
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-bold bg-purple-600"
              : ""
          }>
          SPONSOR
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='container mx-auto py-5'>
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
          <div className='flex items-center justify-around'>
            <div>
              <img src={iconImg} alt='' className='w-16 h-16' />
            </div>
            <a className='btn btn-ghost normal-case text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500 text-transparent bg-clip-text'>
              Fashion Hub
            </a>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end flex gap-10'>
          {user?.email ? (
            <label tabIndex={0}>
              <div className='w-20 rounded-xl'>
                <button className='btn btn-ghost text-white'>
                  {user.displayName}
                </button>
              </div>
            </label>
          ) : (
            ""
          )}
          {user?.email ? (
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src={user.photoURL} />
              </div>
            </label>
          ) : (
            ""
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className='btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white'>
              Log Out
            </button>
          ) : (
            <Link to='/login'>
              <button className='btn border-none bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-500 text-white'>
                Log in
              </button>
            </Link>
          )}
        </div>
        {/* for theme button */}
        <div className="px-5">
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={handleToggle}
            checked = {theme === 'light' ? false : true}/>

            {/* sun icon */}
            <svg
              className='swap-on fill-current w-8 h-8'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
            </svg>

            {/* moon icon */}
            <svg
              className='swap-off fill-current w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
