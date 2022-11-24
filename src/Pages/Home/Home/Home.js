import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div>
                <div className=""><Banner /></div>
                <div className="my-10"><AdvertisedItems></AdvertisedItems></div>
            </div>
            
        </div>
    );
};

export default Home;