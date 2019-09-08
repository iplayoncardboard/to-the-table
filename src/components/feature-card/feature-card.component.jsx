import React from 'react';
import './feature-card.styles.scss';

const FeatureCard = ({imageUrl, features, title})=>(
    <div className='feature-container'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}>
            <div className='title rounded'>{title}</div>
            <div className='description-container '>
                {features.map((feature, index) => (
                
                    <div key={index} className='feature-description rounded'>{feature}</div>
                ))}
            </div>
        </div>
    </div>
    
);

export default FeatureCard;