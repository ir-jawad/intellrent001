import React from 'react';

import ProfilePhoto from '../assets/images/profile-face.png';
import Phone from '../assets/images/phone.png';
import Message from '../assets/images/message.png';
import '../assets/css/intro.css';

const Intro = props => {
    return (
        <div className='intro-section'>
            <div className=''>
                <img src={ProfilePhoto} alt='Profile' className='img-fluid me-4' loading='lazy' />
                <img src={Phone} alt='Profile' className='img-fluid me-4' loading='lazy' />
                <img src={Message} alt='Profile' className='img-fluid' loading='lazy' />
            </div>
            <p className='intro-text mt-3'>{props.text}</p>
        </div>
    )
}

export default Intro;