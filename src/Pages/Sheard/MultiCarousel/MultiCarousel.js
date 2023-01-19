import React from 'react';
import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MultiCarousel = ({products,responsive,setProduct}) => {
  const {user} = useContext(AuthContext);
    return (

      <div className='hover:bg-[#1211]'
       style={{
        paddingBottom: '30px',
        position: 'relative',
        borderRadius: '5px 10px',
      }} >
        <Carousel
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all 3.0"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={[]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  {
products.map(p =>
<div key={p._id} className="card  my-10 w-full lg:w-[250px] lg:h-[300px] gap-4 hover:shadow-xl">
<figure className=" mx-3">
  <img src={p.img} alt={p.title} className=" h-[192px]" />
</figure>
<div className="card-body p-0 items-center text-center">
  <h2 className="card-title">{p.title.slice(0,20)}</h2>
<p>price:{p.sellPrice}</p>
  <div className="card-actions">
    {user?
      <label 
      htmlFor="productModal"
      onClick={() =>setProduct(p)}
      className="flex items-center rounded-lg text-gray-700 link-hover font-bold">buy now</label>:
      <Link to="/login" className='link link-info text-xl '>logIn</Link>
    }
  </div>
</div>
</div>
)
}
      </Carousel>
      </div>
    );
};

export default MultiCarousel;