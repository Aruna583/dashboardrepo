import React from 'react';
import { HiArrowRightCircle } from "react-icons/hi2";
import { GiHamburger } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { MdMenuBook } from "react-icons/md";
import './PopularDishes.css';

const PopularDishes = () => {
  return (
    <div className='popular-div-container'>
        <div className='popular-section-container'>
            <div className='popular-section-div-container'>
                <div className='popular-image-container'>
                  <GoGoal className='dish goals-image'/>
                </div>
                <span className='popular-heading'>Goals</span>
            </div>
            <div>
                <HiArrowRightCircle className='popular-arrow-icon'/>
            </div>
        </div>

        <div className='popular-section-container'>
            <div className='popular-section-div-container'>
                <div className='popular-image-container'>
                  <GiHamburger className='dish popular-dishes'/>
                </div>
                <span className='popular-heading'>Popular Dishes</span>
            </div>
            <div>
            <HiArrowRightCircle className='popular-arrow-icon'/>
            </div>
        </div>

        <div className='popular-section-container'>
            <div className='popular-section-div-container'>
                <div className='popular-image-container'>
                <MdMenuBook className='dish menus-icons'/>
                </div>
                <span className='popular-heading'>Menus</span>
            </div>
            <div>
            <HiArrowRightCircle className='popular-arrow-icon'/>
            </div>
        </div>
    </div>
  )
}

export default PopularDishes