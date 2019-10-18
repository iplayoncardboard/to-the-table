import React from 'react'

const WithSpinner = WrappedContent => ({isLoading, ...otherProps}) => {

    return isLoading? (
        <div className='spinner-overlay'>
            <div className='spinner-container'></div>
        </div>
    ) : (
        <WrappedContent {...otherProps}/>
    )

}

export default WithSpinner;