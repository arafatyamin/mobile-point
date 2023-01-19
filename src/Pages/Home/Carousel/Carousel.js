import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const img = [
    "https://i.ibb.co/pf2t4dz/11114722-3133.jpg", "https://i.ibb.co/T2mbgDz/16136135-5691822.jpg",
    "https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg?w=826&t=st=1674003928~exp=1674004528~hmac=8a48ed624f2950ab4d158eaf5ddc324646589fd8bff9a522a5f5443ee176825d",
    "https://img.freepik.com/premium-vector/winter-sale-banner-template_126183-40.jpg"
]

  const [selectedImg, setSelectedImg] = useState(0)
  const [images, setImages] = useState(img)

  // auto play slider
  useEffect(() => {
    setInterval(() => {
      setSelectedImg(selectedImg => selectedImg < images?.length-1 ? selectedImg + 1 : 0 )
    }, 10000)
  },[images?.length])
  // console.log(selectedImg)
  console.log(images.length)
    return (
      <div className="carousel w-full h-full">
          <div  className="carousel-item relative w-full">
        <img alt="" src={images[selectedImg]} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link onClick={()=>{
            selectedImg > 0 ? setSelectedImg(selectedImg - 1)
            :
            setSelectedImg(images?.length -1)
            
            }} className="md:btn md:btn-circle text-3xl text-white">❮</Link> 
          <Link onClick={()=>{
            selectedImg < images?.length -1 ? setSelectedImg(selectedImg + 1)
            :
            setSelectedImg(0)

             }} className="md:btn md:btn-circle text-3xl text-white">❯</Link>
        </div>
      </div> 
      
    </div>
    );
};

export default Carousel;