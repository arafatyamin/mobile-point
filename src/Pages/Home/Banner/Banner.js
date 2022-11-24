import React from 'react';
import Categories from '../Categories/Categories';

const Banner = () => {
    return (
                <div className="hero lg:h-[500px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60">
                </div>
                <div className="flex text-center  h-full">
                <div className="flex flex-col h-full items-center lg:flex-row">
        <div className="w-1/4 rounded-lg h-full" >
            <Categories></Categories>
            </div>
        <div className="text-white">
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
        </div>
            </div>

                </div>
                </div>
    );
};

export default Banner;