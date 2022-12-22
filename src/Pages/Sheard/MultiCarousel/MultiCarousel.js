import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = ({products,responsive,setProduct}) => {
    return (
            <Carousel
  swipeable={true}
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
<div className="card  my-10 w-[250px] h-[300px] gap-4 hover:shadow-xl">
<figure className=" mx-3">
  <img src={p.img} alt={p.title} className=" h-[192px]" />
</figure>
<div className="card-body p-0 items-center text-center">
  <h2 className="card-title">{p.title.slice(0,20)}</h2>
<p>price:{p.sellPrice}</p>
  <div className="card-actions">
    <label 
    htmlFor="productModal"
    onClick={() =>setProduct(p)}
    className="flex items-center rounded-lg text-gray-700 link-hover font-bold">view details</label>
  </div>
</div>
</div>
)
}
</Carousel>
    );
};

export default MultiCarousel;