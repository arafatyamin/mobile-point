import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import ProductModal from '../../Components/Modal/ProductModal';

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

    console.log(advertiseProducts);

    if(loading){
       return <Loading />
    }
    refetch()
    return (
        <div className="pb-12">
            <div className="grid lg:grid-cols-3 gap-8 m-12 grid-items-center">
                {
                advertiseProducts.map(product =><Card 
                    key={product._id}
                    card={product}
                    setProduct={setProduct}
                    ></Card>
                )
            }
            </div>
            <div className="text-center"> 
            <Link to="/advertises" className="btn border-0 bg-[#01cab8] text-2xl hover:text-[#01cab8] hover:bg-white hover:border-2 hover:border-[#01cab8] rounded-full">see more</Link>
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