import React from 'react';

import OutlineButton from '../utils/OutlineButton';
import '../assets/css/review.css';

const Review = () => {
    return (
        <React.Fragment>
            <h2 className='review mt-4'>Before we get started, please review the acceptance criteria.</h2>
            <div className='text-end mt-3'>
                <OutlineButton>View rental criteria</OutlineButton>
            </div>
        </React.Fragment>
    )
}

export default Review;