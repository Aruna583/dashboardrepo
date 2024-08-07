import React from 'react';
import './MainDashboard.css';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import RightSide from '../RightSide/RightSide';
import TinyBarChart from '../ActivityChart/ActivityChart';

const MainDashboard = () => {
  return (
    <div className='main-dashboard'>
      <div className='content1'>
        <Cards className='cards-container'/>
        <TinyBarChart className=''/>
        <Table className='table-container'/>
      </div>
      <div className='content2'>
      <RightSide/>
      </div>
    </div>
  )
}

export default MainDashboard