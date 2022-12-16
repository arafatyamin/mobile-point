import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Categories from '../Categories/Categories';

const Home = () => {
    
    return (
        <div>
            <div>
                <div className="w-full flex">
                <div className="w-1/4 rounded-lg h-full">
                    <Categories></Categories>
                    </div>
                <div className="w-3/4 rounded-lg h-full
                ">
                    <AdvertisedItems></AdvertisedItems>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;