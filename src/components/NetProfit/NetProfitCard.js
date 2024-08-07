import React from 'react';
import { SalesCardData } from '../Utils/helpers';
import './NetProfitCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfitCard = () => {
  return (
    <div className='net-profit'>
        {SalesCardData.map((item, id) => {
            return(
                <div 
                key={id}
                 className='parent-container-sales-card'
                 style={{background:item?.color?.backGround, boxShadow:item.color.boxShadow}}>
                    <div className='net-profit-div'>
                        <p>Net Profit</p>
                        <p className='profit-value'>{item?.profitValue}</p>
                        <p className='profit-percentage'>{item?.triangleIcon} {item?.percentage}%</p>
                    </div>
                    <div className='barvalue-div'>
                    <div className='circular-bar'>
                    <CircularProgressbar value={item?.barValue} text={`${item?.barValue}%`} />
                        
                    </div>
                    <div className='profit-card-title'>*{item?.title}</div>
                    </div>
                </div>    
            )
        })
        }
    </div>
  )
}

export default NetProfitCard