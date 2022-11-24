import React from 'react';

const AdvertisedItems = () => {
    return (
        <div className="carousel w-4/5 mx-auto h-[100px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img alt="" src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white text-2xl shadow-sm font-bold">❮</a> 
            <a href="#slide2" className="text-white text-2xl shadow-sm font-bold">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img alt="" src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white text-2xl shadow-sm font-bold">❮</a> 
            <a href="#slide1" className="text-white text-2xl shadow-sm font-bold">❯</a>
            </div>
        </div>
        </div>
    );
};

export default AdvertisedItems;