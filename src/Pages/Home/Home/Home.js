import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    
    return (
        <div>
            <div>
                <div className=""><Banner /></div>
                <div className="my-10"><AdvertisedItems></AdvertisedItems></div>
                <div>
                    <Carousel></Carousel>
                </div>
            </div>
            
        </div>
    );
};

export default Home;