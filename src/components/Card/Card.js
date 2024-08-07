import React from 'react';
import './Card.css';

const Card = (props) => {
    const {title, imageIcon, triangleIcon, percentage, totalNum,color, iconColor, textColor  } = props
    const {backGround, boxShadow} = color
  return (
    <div className='card-container' style={{background:backGround, boxShadow:boxShadow, color: textColor}}>
        <div className='dashboard-icon' style={{color: iconColor.color, background:iconColor.backGround}}>
        <span className='image-card-icon'>{imageIcon}</span>
        </div>
        <p className='card-title'>{title}</p>
        
        <div className='num-div'>
            <p className='total-num'>{totalNum}</p>
            <div className='percentage-div'>
                <div className='percentage-align'>
                {triangleIcon} {percentage}%
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card