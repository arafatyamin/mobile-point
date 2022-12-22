import React from 'react';
import AllMobiles from '../../Categories/AllMobiles/AllMobiles';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    
    return (
        <div>
            <div>
                <div className="w-full md:flex h-[290px]">
                <div className="w-full md:w-1/5  bg-gray-200 px-3 shadow-xl  rounded-lg h-full">
                    <Categories />
                    </div>
                <div className="w-full md:w-4/5 h-full 
                ">
                    <Carousel />
                </div>
                </div>
                <div>
                <AdvertisedItems />
                </div>
                <div>
                    <AllMobiles />
                </div>
                    
            </div>
        </div>
    );
};

export default Home;