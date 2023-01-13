import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  
    return (
      <div className="carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src="https://i.ibb.co/pf2t4dz/11114722-3133.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide2" className="btn btn-circle">❮</Link> 
          <Link href="#slide2" className="btn btn-circle">❯</Link>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img alt='' src="https://i.ibb.co/T2mbgDz/16136135-5691822.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide1" className="btn btn-circle">❮</Link> 
          <Link href="#slide1" className="btn btn-circle">❯</Link>
        </div>
      </div>
    </div>
    );
};

export default Carousel;