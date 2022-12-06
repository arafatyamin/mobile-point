import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const Carousel = () => {

    const {data: advertiseProducts = [], loading, refetch} = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/advertise`)
            const data = await res.json();
            return data;
        }
    })
    if(loading){
        <Loading></Loading>
    }
    refetch()
    return (
        <div className="carousel w-full h-[400px]">
            {
                advertiseProducts.map((product,i) => 
                <div id='' className="carousel-item relative w-full">
                    <img src={product.img} alt={product.title} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <Link to='' className="btn btn-circle">❮</Link> 
                    <Link to='' className="btn btn-circle">❯</Link>
                    </div>
                </div> 
                )
            }
        
        </div>
    );
};

export default Carousel;