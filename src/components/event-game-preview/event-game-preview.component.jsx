import React from 'react';
import './event-game-preview.styles.scss';

const EventGamePreview = (props) => (
    <div>
             
               
                    <div className='game-card'>
                        <div className='game-title'>{props.name}</div>
                        <div className='game-image-container'> 
                            <img className='game-image' alt='game' src={props.imageUrl} />
                        </div>
                    </div>
                
    </div>
)

export default EventGamePreview;