import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, handleClick, ...remainingProps})=> (
    <button className='custom-button' onClick = {handleClick} {...remainingProps}>{children}</button>
);

export default CustomButton