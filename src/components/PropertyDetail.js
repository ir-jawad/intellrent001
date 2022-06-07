import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import House from '../assets/images/house.png';
import Bed from '../assets/images/bed.png';
import '../assets/css/property-detail.css';
import OutlineButton from '../utils/OutlineButton';

const PropertyDetail = () => {
    return (
        <div className='d-flex detail-container'>
            <div className=''>
                <img src={House} alt='Profile' className='img-fluid' loading='lazy' />
                <div className='text-center mt-3'>
                    <p className='rent'>$900/mth</p>
                </div>
            </div>
            <div className=''>
                <HiOutlineLocationMarker className='mx-2 icon' />
            </div>
            <div className=''>
                <p className='heading-top'>436 Balboa St <br></br><span className='heading-below'>San Francisco, CA 94118</span></p>
                <img src={Bed} alt='Profile' className='img-fluid' loading='lazy' />
                <p className='feature'>x2.0 <br></br><span className='feature-name'>Bed</span></p>
                <OutlineButton>View property</OutlineButton>
            </div>
        </div>
    )
}

export default PropertyDetail;