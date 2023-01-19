import React from 'react';
import { useState } from 'react';
import AllMobiles from '../../Categories/AllMobiles/AllMobiles'
import Footer from '../../Sheard/Footer/Footer';
import Navbar from '../../Sheard/Navbar/Navbar';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';

const Home = () => {
    const [darkMode,setDarkMode]=useState(false);
    console.log(darkMode)
    return (
        <div className={`${darkMode && 'bg-gray-400 text-white'}`}>
            <div className="w-full md:hidden h-[120px] 
                ">
                    <Carousel />
            </div>
            <div>
                <Navbar></Navbar>
                </div>    
            <div>
                {/* <div className="">
                <button className='bg-black text-white shadow-2xl transition-colors translate-y-1 px-6 mx-3 rounded my-3' onClick={() => setDarkMode(true)}>dark</button>
                <button className={`bg-white shadow-2xl transition-colors -translate-y-1 px-6 mx-3 rounded my-3 text-black ${!darkMode && 'bg-gray-400 text-white'}`} onClick={() => setDarkMode(false)}>light</button>
                </div> */}
                
                <div className="w-full lg:flex lg:h-[290px]">
                <div className="w-full lg:w-1/5  bg-gray-200 px-3 shadow-xl  rounded-lg h-full">
                    <Categories />
                </div>
                <div className="w-full lg:w-4/5 hidden md:block h-[290px] 
                ">
                    <Carousel />
                </div>
                </div>
                
            </div>
            <div className='w-full'>
                <AdvertisedItems />
                </div>
                <div>
                    <AllMobiles />
                </div>
                <div>
      <Footer></Footer>
      </div>
        </div>
    );
};

export default Home;