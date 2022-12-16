import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductViewModal = () => {
    const product = useLoaderData();
    console.log(product);
    const {title, about:details, sellPrice, originalPrice, usedTime, postTime,condition} = product;
    return (

    <div className="">
        <h3>{postTime}</h3>
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-2xl">condition: {condition}</h4>
        <h3 className="text-2xl">original Price: {originalPrice}</h3>
        <h3 className="text-2xl">sell Price: {sellPrice}</h3>
        <h3 className="text-2xl">used time: {usedTime}</h3>
        <p className="py-4">{details}</p>
    </div>

    );
};

export default ProductViewModal;