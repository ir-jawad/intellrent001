import React from 'react';

import Intro from '../utils/Intro';
import Card from '../utils/Card';
import '../assets/css/home.css';
import PropertyDetail from '../components/PropertyDetail';
import Review from '../components/Review';

const Home = () => {
    return (
        <div className='main-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 d-flex align-items-center justify-content-center'>
                        <Card>
                            <Intro text='Hi! I’m Robin, your agent. Welcome to your Rental Application for:' />
                            <PropertyDetail />
                            <Review />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;