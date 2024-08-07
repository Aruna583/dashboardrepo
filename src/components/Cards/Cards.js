import React from 'react';
import './Cards.css';
import { CardsData } from '../Utils/helpers';
import Card from '../Card/Card';

const Cards = () => {
  return (
    <div className='Cards'>
        {CardsData.map((card, id) =>{
            return(
                <div className='parent-container' key={id}>
                    <Card 
                    title={card?.title}
                    color={card?.color}
                    imageIcon={card?.imageIcon}
                    percentage={card?.percentage}
                    totalNum={card?.totalNum}
                    triangleIcon={card?.triangle}
                    iconColor={card?.iconColor}
                    textColor={card?.textColor}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards