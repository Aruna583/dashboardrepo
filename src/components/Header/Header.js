import React from 'react';
import { IoMailOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import img1 from '../../images/img1.png'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-left'>
           <SearchBar/>
        </div>
       
        <div className='header-right'>
            <div className='menu-icon'>
                <IoMailOutline />
            </div>
            <div className='menu-icon'>
                <IoSettingsOutline />
            </div>
            <div className='menu-icon'>
                <IoNotificationsOutline />
            </div>
            <div className='menu-icon'>
                <img src={img1} alt='user-icon' className='user-icon'/>
            </div>
        </div>
    </header>
  )
}

export default Header;