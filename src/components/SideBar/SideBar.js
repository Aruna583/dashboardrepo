import React from 'react';
import { useState } from 'react';
import { SideBarData } from '../Utils/helpers';
import { VscSignOut } from 'react-icons/vsc';
import './SideBar.css';
import dashBoardIcon from '../../images/dashboard.png'

const SideBar = () => {
    const [selected, setSelected] = useState(0);

  return (
    <aside className='sidebar-align'>
    <div className='sidebar-logo'>
      <img src={dashBoardIcon} alt='dash-board-logo' className='dash-board-logo-icon'/>
    </div>
    <div className='sidebar-menu'>
        {SideBarData.map((item, index) => {
            return(
                <div
                className={selected === index ? 'menuItem active' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
                >
                    <item.icon className='icon-item' />
                    {/* {item.heading} */}
                </div>
            )
        })}
        <div className='menuItem'>
          <VscSignOut className='logout-icon'/>
        </div>
    </div>
    </aside>
  )
}

export default SideBar