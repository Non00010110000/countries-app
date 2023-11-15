import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from "../reducers/dark";
import Search from './Search';
import { CiDark } from "react-icons/ci";
import { useEffect } from 'react';
const Nav = () => {
  const isDark = useSelector((state) => state.dark.isDark);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setDarkMode(!isDark));
  };

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = '#202d36'; // Dark mode color
      document.body.style.color = '#ffffff'; // Dark mode text color
    } else {
      document.body.style.backgroundColor = '#fafafa'; // Light mode color
      document.body.style.color = '#000000'; // Light mode text color
    }
  }, [isDark]);

  return (
    <>
      <div className={!isDark ? "nav" : "nav-dark"}>
        <h3>Where in the world?</h3>
        <a className='toogle' onClick={handleToggle}><CiDark /> Dark Mode</a>
      </div>
      <Search isDark={isDark} />
    </>
  )
}

export default Nav;
