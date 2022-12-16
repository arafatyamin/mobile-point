import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = ({products,responsive,setProduct}) => {
    return (
            <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={10000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {
products.map(p =>
<div className="card h-[200px] py-2 m-4 bg-gray-100 shadow-xl">
<figure className=" ">
  <img src={p.img} alt="Shoes" className="rounded-xl h-[100px] " />
</figure>
<div className="card-body p-0 items-center text-center">
  <h2 className="card-title">{p.title}</h2>
  <div className="card-actions">
    <label 
    htmlFor="productModal"
    onClick={() =>setProduct(p)}
    className="flex items-center btn-sm rounded-lg text-white font-bold bg-[#3a9dd5]">Buy Now</label>
  </div>
</div>
</div>
)
}
</Carousel>
    );
};

export default MultiCarousel;