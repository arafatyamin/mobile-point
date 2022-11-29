import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from '../../Components/Card/Card';

const Advertises = () => {
    const {data: advertiseProducts = [], refetch} = useQuery({
        queryKey: ['advertiseProducts'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/advertise`)
            const data = await res.json();
            return data;
        }
    })
    
    refetch()
    return (
        <div className="grid grid-cols-3">
            {
                advertiseProducts.map(product =><Card 
                    key={product._id} 
                    card={product}
                    ></Card>
                    )
            }
        </div>
    );
};

export default Advertises;