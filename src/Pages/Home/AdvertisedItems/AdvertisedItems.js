import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import ProductModal from '../../Components/Modal/ProductModal';
import MultiCarousel from '../../Sheard/MultiCarousel/MultiCarousel';


const AdvertisedItems = () => {
    const [product, setProduct] = useState('');
    const {data: advertiseProducts = [], loading, refetch} = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/advertiseLimit`,{
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data = await res.json();
            return data;
        }
    })
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    console.log(advertiseProducts);

    if(loading){
       return <Loading />
    }
    refetch()
    return (
        <div className="pb-12">
            <h1 className='text-4xl text-black
             text-center'>ads</h1>
{/* product,responsive,setProduct,productModal */}
            <div className=''>
            {
            <MultiCarousel
            products={advertiseProducts}
            responsive={responsive}
            setProduct={setProduct}
            ></MultiCarousel>
                }
            </div>
            <div>
            <ProductModal 
            product={product}
            setProduct={setProduct}
            ></ProductModal>
            </div>
            </div>
    );
};

export default AdvertisedItems;