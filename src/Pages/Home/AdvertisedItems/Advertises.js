import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Card from '../../Components/Card/Card';
import ProductModal from '../../Components/Modal/ProductModal';

const Advertises = () => {
    const [product, setProduct] = useState('');
    const {data: advertiseProducts = [], refetch} = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: async()=>{
            const res = await fetch(`https://mobile-resell-server.vercel.app/advertise`)
            const data = await res.json();
            return data;
        }
    })
    
    refetch()
    return (
        <div className="grid grid-cols-3 gap-4">
            
            {
                advertiseProducts?.map(product => !product.paid && <Card 
                    key={product._id} 
                    card={product}
                    setProduct={setProduct}
                    ></Card>
                    )
            }

<div>
            <ProductModal 
            product={product}
            setProduct={setProduct}
            ></ProductModal>
            </div>
        </div>
    );
};

export default Advertises;