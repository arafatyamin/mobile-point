import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            
        </div>
    );
};

export default DetailsCard;