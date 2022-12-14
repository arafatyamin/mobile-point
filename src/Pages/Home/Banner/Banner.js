import React from 'react';
import Categories from '../Categories/Categories';

const Banner = () => {
    return (
                <div className="hero lg:h-[500px]">
                <div className="hero-overlay bg-opacity-60">
                </div>
                <div className="flex text-center  h-full">
                <div className="flex flex-col h-full items-center lg:flex-row">
        <div className="w-1/4 rounded-lg h-full" >
            <Categories></Categories>
            </div>
        <div className="text-white" 
        style={{ backgroundImage: `url("https://i.ibb.co/jW2wzzY/arch.jpg")` }}>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
            </div>
                </div>
                </div>
    );
};

export default Banner;