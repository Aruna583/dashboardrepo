import React from 'react';
import './RightSide.css';
import NetProfitCard from '../NetProfit/NetProfitCard';
import PopularDishes from '../PopularDishes/PopularDishes';
import FeedBackPage from '../FeedBackPage/FeedBackPage';

const RightSide = () => {
  return (
    <div>
        <NetProfitCard />
        <PopularDishes />
        <FeedBackPage />
    </div>
  )
}

export default RightSide