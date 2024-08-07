import React from 'react';
import './FeedBackPage.css';
import { FeedbackData } from '../Utils/helpers';

const FeedBackPage = () => {
  return (
    <div className='feedback-container'>
        <h1 className='feedback-main-heading'>Customer's Feedback</h1>
        {
            FeedbackData.map((feedback, id)=>(
                <div className='feedback-item' key={feedback.id}>
                    <div className='feedback-header'>
                        <img src={feedback.imageUrl} alt={`${feedback.name}`}/>
                        <h3 className='feedback-customer-name'>{feedback.name}</h3>
                    </div>   
                    <div className='feedback-rating'>
                        {Array(5).fill().map((_,index) => (
                            <span key={index} 
                            className={`star ${index < feedback.rating ? 'filled' : 'empty'}`}
                            >★</span>
                        ))}
                    </div>
                    <div className='feedback-review'>
                        <p>{feedback.review}</p>
                    </div>
                    <hr className='feedback-divider'/>
                </div>
            ))
        }
    </div>
  )
}

export default FeedBackPage